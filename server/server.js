// require technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
var mongoose = require('mongoose');

// establish port
var port = process.env.PORT || 1415;

// require server side model and route
var petModel = ('../models/petArchetype');
var petRouter = ('../routers/petRoutes');
// app.use(petRouter);

// spin-up server
app.listen(port, function () {
  console.log("Hi, I'm a server from pi. 3." + port + '9265359');
});
