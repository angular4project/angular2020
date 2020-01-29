var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var users = new Schema({
  name: String,
  phone:Number,
  email:String,
  password:Number
});
mongoose.model("users",users);
