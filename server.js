var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http=require('http');
var Contact = require('./db/index')
var mongoose = require('mongoose');



app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());



app.get('/contact',function(req,res){
	Contact.find(function(err,data){
		res.JSON(data);
	});

});
app.post('/contact',function(req,res){
	Contact.insert(req.body,function(err,data){
		req.JSON(data);
	});
});



var port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
