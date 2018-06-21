var express = require("express");
var app= express();
var port = process.env.PORT || 2000;

app.get("/" ,function(req , res){
	res.send("welcome to F MyD Demo!");
});

app.get('/tst' , (req, res) => res.send("tst Page"))


app.listen(port);
