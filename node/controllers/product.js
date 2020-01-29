var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
// var http = require('http');
var app = express();   
// var server = http.createServer(app);
var parseUrlencoded= bodyParser.json;
app.use(bodyParser.urlencoded({extended:true}))

route.post("/addproduct",parseUrlencoded,function(request,response){
  var productModel=mongoose.model("product");
  var product=new productModel();
  product.name=Request.body.name;
  product.catigory=Request.body.catigory;
product.save(function(err,data){
  response.json(data);
  console.log(data);
})
})
 
route.get("/list-product",function(request,response){
    mongoose.model("product").find(function(err,data){
      response.send('./product/List-product',{product_data:data})
    })
   console.log("list")

})
route.get("/productDetails/:_id",parseUrlencoded,function(request,response){
  var _id=request.params._id
  mongoose.model("product").findOne({_id:_id},function(err,data){
    response.json(data)
  })
})

 module.exports=route;