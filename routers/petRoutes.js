// establish technologies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// require model in route
var Pets = require('../models/petArchetype.js');

// get route that retrieves all pets in DB
router.get('/all', function (req, res) {
  console.log('In get all!');

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

router.post('/all', function (req, res) {
    console.log('In post all!');
    var data = req.body;
    var newPet = new Pets({
      name: data.name,
      animal: data.animal,
      age: data.age,
      pic: data.pic
    }); // end new Pet

    newPet.save( function(err) {
      if (err) {
        console.log('save error!');
        res.sendStatus(500);
      } else {
        console.log('save success!');
        res.sendStatus(200);
      }
    }); // end save
}); // end post /all route

module.exports = router;
