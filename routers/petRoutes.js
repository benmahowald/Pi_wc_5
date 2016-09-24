// establish technologies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// require model in route
var petModel = require('../models/petArchetype');

// get route that retrieves all pets in DB
router.get('/all', function (req, res) {
  console.log('Look at all the pets!');
  res.sendStatus(200);
});

module.exports = router;
