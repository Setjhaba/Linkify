const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: '',
    password: process.env.PASSWORD,
    port: process.env.PORT2,
});

module.exports = pool;