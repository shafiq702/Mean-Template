var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/browser/'));
app.use(express.static(__dirname + '/node_modules/'));


app.use('/', function(req,res,next){
	res.json('/app/index')
});

app.use('/', function(err, req, res, next){
console.log(err);
res.status(500).send(err);
});


module.exports = app;
