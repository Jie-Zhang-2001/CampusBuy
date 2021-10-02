const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { storage, cloudinary } = require("../cloudinary");
const upload = multer({ storage });
const { pool } = require("../dbConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const cookie = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors({ credentials: true, origin: "http://campus-buy.com" }));
app.use(cookie());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const isAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (auth.verifyToken(token)) {
    next();
  } else {
    res.send({
      authenticated: false,
      message: "Please Login!"
     
    });
  }
};

app.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  let hashedPassword = await bcrypt.hash(password, 8);
  pool.query(
    `SELECT * FROM loginsignup
        WHERE email = $1`,
    [email],
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rows.length > 0) {
        res.send("Email already registered");
      } else {
        pool.query(
          `INSERT INTO loginsignup (name, email, password)
                    VALUES($1, $2, $3)
                    RETURNING email, password`,
          [name, email, hashedPassword],
          (err, results) => {
            if (err) {
              throw err;
            }
            if (results) {
              res.send("Successfully registered");
            }
          }
        );
      }
    }
  );
});

app.get("/logout", isAuth, (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: 'none', secure: true } );

  res.send({
    authenticated: false,
    token: null,
  });
});

app.get("/isloggedin", isAuth, (req, res) => {
  res.send({
    authenticated: true,
    token: req.cookies.token,
  });
});



app.post("/getUser", (req, res) => {
  const { token } = req.body;
  if (auth.verifyToken(token)) {
    const getUserQuery = `SELECT * FROM loginsignup WHERE token='${token}' LIMIT 1`;
    pool.query(getUserQuery, (err, result) => {
      if (err) throw err;
      if (result.rows.length < 1) {
        res.send({
          querySuccess: false,
          message: "No user found!",
        });
      } else {
        res.send({
          querySuccess: true,
          message: "User found!",
          user: result.rows[0],
        });
      }
    });
  } else {
    res.send({
      querySuccess: false,
      message: "Invalid token!",
    });
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  pool.query(
    `SELECT * FROM loginsignup WHERE email=$1`,
    [email],
    (err, result) => {
      if (err) {
        throw err;
      }
      if (result.rows.length > 0) {
        //email found in database
        const user = result.rows[0];

        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          if (result) {
            const token = auth.generateToken(user);
            res.cookie("token", token, { httpOnly: true, sameSite: 'none', secure: true });
            const saveTokenQuery = `UPDATE loginsignup SET token='${token}' WHERE email='${email}'`;
            pool.query(saveTokenQuery, (err) => {
              if (err) throw err;
            });
            res.send({
              authorized: true,
              message: "Successfully Logged In!",
              token: token,
            });
          } else {
            res.send({
              authorized: false,
              message: "Email or password not correct!",
            });
          }
        });
      } else {
        res.send({
          authorized: false,
          message: "Email not registered!",
        });
      }
    }
  );
});

app.post('/deleteProduct',async (req,res)=>{
    const {token, productId, userEmail} = req.body;
    if( auth.verifyToken(token) ){
        const getUserEmailQuery = `SELECT * FROM loginsignup WHERE token='${token}' LIMIT 1`;
        pool.query(getUserEmailQuery,(err,result)=>{
            if(err) throw err;
            if(result.rows.length<1){
                res.send({
                    querySuccess: false,
                    message: `The given token does not have a related user.`
                });
            }
            else{
                if( result.rows[0].email !== userEmail ){
                    res.send({
                        querySuccess: false,
                        message: `The given token and user email are not referring to the same user, please try again.`
                    });
                }
                else{
                    const getProductQuery = `SELECT * FROM products WHERE id='${productId}' LIMIT 1`;
                    pool.query(getProductQuery, (err, result)=>{
                      if(err) throw err;
                      if(result.rows.length<1){
                        res.send({
                          querySuccess: false,
                          message: `The selected product is not found.`
                        });
                      }
                      else{
                        const product = result.rows[0];
                        const imageURLs = product.productImages;
                        for(let i=0;i<imageURLs.length;i++){
                          var index1 = imageURLs[i].indexOf(`CampusBuy`);
                          var index2 = imageURLs[i].lastIndexOf(`.`);
                          var cloudinary_id = imageURLs[i].substring(index1,index2);
                          cloudinary.uploader.destroy(cloudinary_id, function(error,result) {
                             });
                        }

                        const deleteProductQuery = `DELETE FROM comments WHERE product='${productId}'; DELETE FROM products WHERE id='${productId}'`;
                        pool.query(deleteProductQuery,(err,result)=>{
                          if(err) throw err;
                          
                          res.send({
                            querySuccess: true,
                            message: `The selected product is successfully deleted.`
                          });
                        });
                      }
                    });

                    
                }
            }
        });
    }
    else{
        res.send({
            querySuccess: false,
            message: `The given token is not valid.`
        });
    }
});

app.post("/postProduct", upload.array("productImage", 10), async (req, res) => {
  const { productName, productDescrip, productPrice, productCategory ,token } = req.body;
  const productImages = [];
  for (let i = 0; i < req.files.length; i++) {
    productImages.push(req.files[i].path);
  }
  
  const clientEmailQuery = `SELECT EMAIL FROM loginsignup WHERE token='${token}'`;

  const queryFailure = {
    querySuccess: false,
    message: "New product did not sucessfully inserted into our database.",
  };

  pool.query(clientEmailQuery, (err, result) => {
    if (err) throw err;
    if (result.rows.length < 1) {
      res.send(queryFailure);
      return;
    }
    const productSeller = result.rows[0].email;
    if (productSeller === null) {
      res.send(queryFailure);
      return;
    }
    const productInsertQuery = `INSERT INTO products ("productName", "productDescrip", "productImages", "productPrice", "productSeller", "productCategory")
            VALUES ('${productName}', '${productDescrip}', '{${productImages}}', '${productPrice}', '${productSeller}', '${productCategory}')`;

    pool.query(productInsertQuery, (err, result) => {
      if (err) throw err;

      res.send({
        querySuccess: true,
        message: "New product is sucessfully inserted into our store.",
      });
    });
  });
});

app.post('/searchProducts', async (req,res)=>{
  const {token, target } = req.body;
  if( auth.verifyToken(token)){
    const searchProductsQuery = `SELECT * FROM products WHERE "productName" ILIKE '%${target}%' OR "productDescrip" ILIKE '%${target}%' `;
    pool.query(searchProductsQuery, (err, result) =>{
      if(err) throw err;
      res.send({
        querySuccess: true,
        searchResult: result.rows
      });
    });
  }
  else{
    res.send({
      querySuccess: false,
      message: 'Invalid token, please try relogin.'
    });
  }

});


app.post('/postComment', async (req,res)=>{
  const {token, comment, productId } = req.body;
  if( auth.verifyToken(token) ){
    const getUserQuery = `SELECT * FROM loginsignup WHERE token='${token}' LIMIT 1`;
    pool.query(getUserQuery,(err, result)=>{
      if(err) throw err;
      if(result.rows.length<1){
        res.send({
          querySuccess: false,
          message: 'No user is corresponding with this token, please try relogin'
        });
      }
      else{
          const user = result.rows[0];
          const postCommentQuery = `INSERT INTO comments ("comment", "user", "product")
          VALUES ('${comment}', '${user.email}', '${productId}')`;
          pool.query(postCommentQuery,(err,result)=>{
            if(err) throw err;
            res.send({
              querySuccess: true,
              message: 'Comment is successfully added.'
            });
          });
      }
    });
  }
  else{
    res.send({
      querySuccess: false,
      message: 'Invalid token, please try relogin.'
    });
  }
});

app.post('/getComments', async(req,res)=>{
  const {token,  productId } = req.body;
  if( auth.verifyToken(token) ){
    const getUserQuery = `SELECT * FROM loginsignup WHERE token='${token}' LIMIT 1`;
    pool.query(getUserQuery,(err, result)=>{
      if(err) throw err;
      if(result.rows.length<1){
        res.send({
          querySuccess: false,
          message: 'No user is corresponding with this token, please try relogin'
        });
      }
      else{
          
          const getCommentsQuery = `SELECT * FROM comments WHERE product='${productId}'`;
          pool.query(getCommentsQuery,(err,result)=>{
            if(err) throw err;
            res.send({
              querySuccess: true,
              message: 'Comment is successfully added.',
              comments: result.rows
            });
          });
      }
    });
  }
  else{
    res.send({
      querySuccess: false,
      message: 'Invalid token, please try relogin.'
    });
  }
});

app.post("/getProducts", async (req, res) => {
  const { token } = req.body;
  if (auth.verifyToken(token)) {
    const getProductsQuery = `SELECT * FROM products`;
    pool.query(getProductsQuery, (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    });
  } else {
      res.send(null);
  }
});

app.post("/getProduct", async (req, res) => {
  const { token, productId } = req.body;
  if (auth.verifyToken(token)) {
    const getProductQuery = `SELECT * FROM products WHERE id='${productId}'`;
    pool.query(getProductQuery, (err, result) => {
      if (err) throw err;
      if (result.rows.length < 1) {
        res.send({
          querySuccess: false,
          message: "No product with such id is found!",
        });
      } else {
        res.send(result.rows[0]);
      }
    });
  } else {
    res.send({
      querySuccess: false,
      message: "Token is invalid, please try to relogin!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`port opened on ${PORT}`);
});
