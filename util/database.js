const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-js", // database=> Schemas
  password: "Ajay123sql",
});

module.exports = pool.promise();
