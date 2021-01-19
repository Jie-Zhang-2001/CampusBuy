
const express = require('express');
const cors = require('cors');
const { pool } = require('../dbConfig');
const bcrypt = require('bcrypt');
//const passport = require("passport");
//const initializePassport = require('./passportConfig');
//initializePassport(passport);
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(passport.initialize);
//app.use(passport.session);
app.post('/signup', async (req, res) => {
   
    let { name, email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 8);
    pool.query(
        `SELECT * FROM users
        WHERE email = $1`, [email], (err, results) => {
            if (err) {
                throw err;
            }
            if (results.rows.length > 0) {
                res.send("1"); //1 for email already registered
            } else {
                pool.query(
                    `INSERT INTO users (name, email, password)
                    VALUES($1, $2, $3)
                    RETURNING id, password`, [name, email, hashedPassword], (err, results) => {
                        if (err) {
                            throw err;
                        }
                        console.log(results.rows); 
                        res.send("2"); // 2 for successfully registered
                    }
                )
            }
        }
    )
});

app.get('/', (req, res) => {
    res.send("Im here");
})
app.post('/login', async (req,res) =>{ 

    let { email, password } = req.body;
   
    pool.query(
        `SELECT * FROM loginsignup WHERE  email= $1`, [email],
        (err, results) => { 
            if (err) 
            throw err;
            if(results.rowCount!=0){

                if(results.rows[0].password === password ){
                    res.send("good");
                }
                else{
                    res.send("bad");
                }
                
              
                
            }
            else{
                res.send("bad");
            }
          
            
         });

    
});

app.listen(PORT, () => {
    console.log(PORT);
    console.log("port opened");
})