// Set up MySQL connection.
var mysql = require("mysql");

let connection;
console.log("================");
console.log(process.env);
console.log("================");
if(process.env.JAWSDBURL){
  connection = mysql.createConnection(process.env.JAWSDBURL);
}else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "cat_db"
  });
}


// Make connection.
connection.connect(function(err) {

  console.log(process.env.PASSWORD);
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
