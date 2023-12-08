require('dotenv').config()
const express = require('express');
const pool = require("./db")

const app = express();
const session = require('express-session');
const store = new session.MemoryStore();

app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
    session({
        secret: "D56gds147",
        cookie : { maxAge : 172800000,
        secure: true, 
        sameSite: "none" },
        resave: false,
        saveUninitialized: false,
        store,
    })
);

//Registering a new user
app.post("/api/v1/register", async(req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ message: 'Error registering user' });
    }
});

//Looging in a user
app.post("/api/v1/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

        if (result.rows.length > 0) {
            res.json({
                message: 'Login successful'
            });

        } else {
            res.status(401).json({
                message: 'Invaild credentials'
            });
        }

    } catch (error) {
        res.status(400).json({
            message: 'Error logging in'
        });
    }
});


const port = process.env.PORT1 || 4005;

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});