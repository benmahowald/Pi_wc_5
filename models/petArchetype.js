var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pet = new Schema({
  name: String,
  animal: String,
  age: Number,
  pic: String
});

var pets = mongoose.model('pets', Pet);
module.exports = pets;
