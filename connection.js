const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "User",
    port: 5432,
    password: "Wzx2dq#s",
    database: "mydb"
})

module.exports = client