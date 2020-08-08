const mysql = require("mysql");

var connection = mysql.createConnection ({
host: "localhost",
port: 8080,
user: "root",
password: "chad1985",
database: "burgers_db",
}):

module.exports = connection;