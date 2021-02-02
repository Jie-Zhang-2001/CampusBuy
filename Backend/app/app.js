const express = require('express');
const cors = require('cors');
const { pool } = require('../dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./auth');
const cookie = require('cookie-parser');

const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors({credentials: true, origin:"http://localhost:3000"}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(express.json({limit: '500mb', extended: true}));   // this allows frontend to pass maximum of 500mb data to backend
app.use(express.urlencoded({limit: '500mb', extended: true}));


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
}

app.post('/signup', async (req, res) => {
    let { name, email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 8);
    pool.query(
        `SELECT * FROM loginsignup
        WHERE email = $1`, [email], (err, results) => {
        if (err) {
            throw err;
        }
        if (results.rows.length > 0) {
             res.send("Email already registered");
        } else {
            pool.query(
                `INSERT INTO loginsignup (name, email, password)
                    VALUES($1, $2, $3)
                    RETURNING id, password`, [name, email, hashedPassword], (err, results) => {
                if (err) {
                    throw err;
                }
                if (results) {
                     res.send("Successfully registered");
                }
            }
            )
        }
    }
    );
});

app.get('/', (req, res) => {
    res.send("Im here");
})

app.get('/homepage', isAuth, (req, res) => {
    res.send('authenticated!');
})


app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    pool.query(
        `SELECT * FROM loginsignup WHERE email=$1`, [email], (err, result) => {
            if (err) {
                throw err;
            }
            if (result.rows.length > 0) { //email found in database
                const user = result.rows[0];
                console.log(user.password +"   "+ password);

                 bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    if (result) {
                        const token = auth.generateToken(user);
                        res.cookie('token', token, { httpOnly: true });
                        res.send({
                            authorized: true,
                            message: "Successfully Logged In!"
                        });
                    } else {
                        res.send({
                            authorized: false,
                            message: 'Email or password not correct!'
                        });
                    }
                })
            } else {
                res.send({
                    authorized: false,
                    message: "Email not registered!"
                });
            }
        }
    );
});



app.post('/postProduct',async (req, res) => {
    let {productName, productDescrip, productPrice, productImages } = req.body;
    pool.query(
        `INSERT INTO products ("productName", "productDescrip", "productImages", "productPrice", "productSeller", "productType")
         VALUES ($1, $2, $3, $4, $5, $6)`, [productName,productDescrip,productImages,productPrice, 123, "noType"], (err, result) => {
             if(err){
                 throw err;
             }
             
             pool.query(
                 `SELECT  *  from products; `, (err, result) => {
                     if (err){
                        throw err;
                     }
                     for(var i=0;i<result.rows.length;i++){
                         const obj = result.rows[i];
                         console.log(obj.productImages); // this allows us to see the content of bytea[] object
                     }
                     
                       
                 }
             );

             res.send({
                 authorized: true,
                 message: 'New product is sucessfully inserted into our database.'
             });
         }
    );

});





app.listen(PORT, () => {
    console.log(`port opened on ${PORT}`);
})