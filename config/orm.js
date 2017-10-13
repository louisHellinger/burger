var connection = require("../config/connection.js");


var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log("this is the select all");
      console.log(result);
    });
  },
  insertOne: function(tableName, burgerName, devoured, name, bool, cb) {
    

    var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)"
   

    console.log("=============this is the query String \n\r" + queryString);

    connection.query(queryString, [tableName, burgerName, devoured, name, bool], function(err, result) {
    	if (err) {
        throw err;
      }
      console.log("this is the burger name in ORM ");
      console.log(result);
      cb(result);
    });

  },
  updateOne: function(tableName, devoured, bool, burgerId, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

    console.log(queryString);

    connection.query(queryString, [tableName, devoured, bool, burgerId], function(err,result) {
    	if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },
  resetAll:function(tableName, devoured, bool, cb){
    var queryString = "UPDATE ?? SET ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableName, devoured, bool], function(err,result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log(result);
    });
  }
};

module.exports = orm;