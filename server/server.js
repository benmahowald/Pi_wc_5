// establish technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
var mongoose = require('mongoose');

// establish port
var port = process.env.PORT || 1415;

// static public folder
app.use(express.static('server/public'));

// link server side model and route
var petRouter = require('../routers/petRoutes');
app.use(petRouter);

// link server to DB
var mongoURI = 'mongodb://localhost:27017/pi_pets';
var MongoDB = mongoose.connect(mongoURI).connection;

// spin-up server
app.listen(port, function () {
  console.log("Hi, I'm a server from pi. 3." + port + '9265359!');
});

//base url
app.get('/', function (req, res) {
  console.log('Base ingredients are in the kitchen.');
  res.sendFile(path.resolve('server/public/views/index.html'));
});
