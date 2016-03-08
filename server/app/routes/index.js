var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var serveStatic = require('serve-static');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(serveStatic(__dirname, {'index': ['index.html']}))
// app.use('/*', function(req,res,next){
// 	res.sendFile(path.resolve('./server/app/views/index.html'));
// });

app.use('/', function(err, req, res){
console.log(err);
res.status(500).send(err);
});


module.exports = app;
