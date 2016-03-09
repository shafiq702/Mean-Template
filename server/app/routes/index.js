var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../views')));
app.use(express.static(path.join(__dirname, '../../../public')));
app.use(express.static(path.join(__dirname, '../../../node_modules')));
app.use(express.static(path.join(__dirname, '../../../browser')));

app.use('/', function(req,res,next){
	res.sendFile('index.html');
});

app.use('/', function(err, req, res){
	res.status(500).send(err);
});


module.exports = app;
