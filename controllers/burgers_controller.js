var express = require("express");
var router = express.Router();

console.log("Burger controllers loaded");

var burger = require("../models/burger.js");

router.get("/", function(req, res) {

	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});

});

router.get("/all-burgers", function(req, res) {

	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});

});

router.post("/api/burgers/", function(req, res) {

	console.log(req.body);

	burger.insertOne(req.body.burger),
		function(result) {
			console.log(result);
			res.json({
				id: result
			});
		};
	res.redirect("/");

});

router.put("/api/burgers/:id", function(req, res){
	console.log("made it to update ROUTE");

	var id = req.params.id; 
	
	console.log ("this is req.params" + id);

	burger.updateOne('1', id, function(result) {
		console.log(result);
		res.json(result);

	})

});

router.put("/", function(req, res){
	console.log("made it to update RESET ROUTE");

	burger.resetAll('0', function(result) {
		console.log(result);
		
		res.json(result);

	})

});

module.exports = router;