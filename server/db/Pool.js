require('dotenv').config();
const { Pool } = require("pg");

const conString = process.env.CONNECTION;

const pool = new Pool({
    connectionString: 'our connection string'
});

module.exports = {
    pool,
    connect: () => pool.connect()
}