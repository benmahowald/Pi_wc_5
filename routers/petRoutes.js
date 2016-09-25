// establish technologies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// require model in route
var Pets = require('../models/petArchetype.js');

// get route that retrieves all pets in DB
router.get('/all', function (req, res) {
  console.log('Get pets hit!');

  Pets.find({}, function (err, pets) {
    console.log('in find');
    if (err) {
      console.log('You forgot to feed the pets!');
      res.sendStatus(500);
    } else {
      res.send(pets);
    }
  }); // end find
}); // end get route

module.exports = router;
