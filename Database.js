const mysql = require("mysql")
const dotenv = require("dotenv")

dotenv.config({ path: './config.env' });

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 8889,
//     user: 'root',
//     password: 'root',
//     database: 'Alumni'
// })

connection.connect( (err) => {
    if (err){
        console.log(err)
    }
    else
    {
        console.log("Database connecté!")
    }
})

module.exports = connection ;