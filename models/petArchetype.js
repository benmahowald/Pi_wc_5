var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  animal: String,
  age: Number,
  pic: String
});

var pets = mongoose.model('pets', petSchema);
module.exports = pets;
