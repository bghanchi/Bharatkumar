var Express = require('express');
var http=require('http')
var multer = require('multer');
var app = Express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
var data,name,email,subject,message;
var i=0; 



var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/singup', function(req, res) {
//  res.send('You sent the name "' + req.body.name+ '".');


MongoClient.connect(url,function(err,db){
  
    var data=db.db('UserLogin')

    console.log('Hello Bharat Kumar');
 
    var obj={
    name:req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    message:req.body.message
   }

//    console.log(req.body.name)
    data.collection('students').insertOne(obj,function(err,res1){
      if(err) throw err;
         res.send('Hello');
//      db.close();
    })



   


   })
   


   
 // console.log(req.body.name)

})




app.post('/username',function(req,res){
    name=req.body.name; 
    console.log(name);
    res.send("Welcome"+" "+name)
})


app.listen(2000, function(a) {
    console.log("Listening to port 2001");
});


