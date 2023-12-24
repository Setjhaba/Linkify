require('dotenv').config()
const express = require('express');
const cors = require("cors")
const pool = require("./db")

const app = express();


app.use(express.json());
app.use(cors());

//Routes

//Registering a new user and Logging in

app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));


const port = process.env.PORT1 || 4005;

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});