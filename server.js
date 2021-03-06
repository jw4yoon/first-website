var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
	console.log("/" + req.method);
	next();
});

router.get("/",function(req,res){
	res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
	res.sendFile(path + "about.html");
});

app.use("/",router);

//app.use("*",function(req,res){
//	res.sendFile(path + "404.html");
//});

app.use(function(req, res, next){
    res.status(404).render('404_error_template', {title: "Sorry, page not found"});
});

app.listen(3000,function(){
	console.log("Live at Port 3000");
});
