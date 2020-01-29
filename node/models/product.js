var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var product = new Schema({
  img: String,
  name: String,
  discription: String,
  price:Number,
  catigory:String,
});

mongoose.model("product",product);
