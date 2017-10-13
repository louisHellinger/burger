var express = require("express");
var mo = require("method-override");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();



app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");
//exphbs.registerPartial(__dirname + './views/partials');

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});