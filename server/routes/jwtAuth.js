const express = require("express");
const router = require("express").Router();
const jwtGenerator = require("../utils/jwtGenerator");
const validation = require("../middleware/validation");
const authorization = require("../middleware/authorization");

const pool = require("../db");
const bcrypt = require("bcrypt");

//Registering

router.post("/register",validation, async (req, res) => {
    try {
        
    //1. Destructure the req.body (name, password, email)
      const { name, password, email } = req.body;
      
      //2. Check if user exists
        
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email
        ]);

       if (user.rows.length !== 0) {
            return res.status(401).send("User already exists");
       };

        //3. Bcrypt user password

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        const bcryptPassword = await bcrypt.hash(password, salt);

        //4. Register new user to database

        const newUser = await pool.query("INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *", [name, bcryptPassword, email]);

       // res.json(newUser.rows[0]);

        //5. Generate jwt token 

        const token = jwtGenerator(newUser.rows[0].id);

        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Login route
router.post("/login",validation, async (req, res) => {
    try {

        //1. Destructure req.body

        const { password, email } = req.body;

        //2. Check if user exists

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if(user.rows.length === 0) {
            return res.status(401).json("Invail Credentials");
        }

        //3. Check if password exists

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        // console.log(validPassword); Do this test password

        if (!validPassword) {
            return res.status(401).json("Invaild Credentials");
        }

        //4. Allocate jwt token

        const token = jwtGenerator(user.rows[0].id);

       // res.json({ token });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.get("/verify", authorization, async (req, res) => {
    try {
        
        res.json(true);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;