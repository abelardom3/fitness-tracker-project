const { Pool } = require('pg')
require('dotenv').config();


const connection = process.env.DATABASE_URL

const pool = new Pool({
    connectionString: connection
});

module.exports = pool;




// const pool = new Pool({
//     user: 'abela',
//     password: '812315',
//     host: 'localhost',
//     port: 5432,
//     database: 'fitness_app'
// })


module.exports = pool