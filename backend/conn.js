const { Pool } = require('pg')
require('dotenv').config();


const connection = process.env.DATABASE_URL

const pool = new Pool({
    connectionString: connection
});

module.exports = pool;






module.exports = pool