var orm = require("../config/orm.js");

console.log("burger JS loaded");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
      console.log("this is res: " + res);
    });
  },
  insertOne: function(name) {
  	console.log("this is the burgerName " + name);

    orm.insertOne('burgers', 'burger_name', 'devoured', name, false, function(res) {
      console.log(res);
    });
  },
  updateOne: function(bool, burgerId, cb) {
    orm.updateOne("burgers", "devoured", bool, burgerId, function(res) {
      console.log("this is res in BURGER.js");
      console.log(res);
      cb(res);

    });
},

  resetAll:function(bool,cb){
	orm.resetAll("burgers", "devoured", bool, function(res) {
      console.log("this is res in BURGER.js");
      console.log(res);
      cb(res);
    });  
  }
};



module.exports = burger;



