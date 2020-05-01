let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname+"/public"));
app.get("/", function(req, res){

	res.render("index");
});

app.get("/form", function(req, res){

	res.render("form");
});

app.post("/form", urlencodedParser, function(req, res){

	if(!req.body) return res.sendStatus(400);
	res.render("form-success", {data:req.body});
});

app.get("/user/:name", function(req, res){

	console.log(req.query);
	res.render("user", {name:req.params.name});
});


app.listen("3000");