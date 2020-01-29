var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
// var http = require('http');
var app = express();   
// var server = http.createServer(app);
var parseUrlencoded= bodyParser.json;
app.use(bodyParser.urlencoded({extended:true}))

route.get("/list",function(request,response){
    mongoose.model("users").find(function(err,data){
      response.json(data)
    })
  
  })

 module.exports=route;