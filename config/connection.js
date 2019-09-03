// Set up MySQL connection.
var mysql = require("mysql");

connection = mysql.createConnection(process.env.JAWSDB_URL);

// Make connection.
connection.connect(function (err) {

  console.log(process.env.PASSWORD);
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
