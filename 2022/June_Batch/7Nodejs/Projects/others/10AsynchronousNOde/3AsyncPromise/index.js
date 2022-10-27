const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const PostCollection=require('./models/post')

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("entering here");
    console.log("displaying next");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE"
    );
    next();
  });


  mongoose.connect("mongodb://localhost/db").then(()=>{
    console.log("connnected");
  }).catch(
    ()=>{
      console.log("failed");
    });


    app.post("/api/post", (req, res, next) => {
      debugger;
      
      var promiseForPost = new Promise((resolve, reject) => {
        const temp = new PostCollection({
          id:req.body.id,
          name:req.body.fullname,
          reason:req.body.reason
         });
         temp.save().then(documents=>{
          resolve(documents);
         }).catch(
           (error)=>{
            reject(error);
           });
      });
    
      
      var promiseForGet = new Promise((resolve, reject) => {
   
        PostCollection.find().then(documents=>{
          resolve(documents);
         }).catch(
           (error)=>{
            reject(error);
           });
      });


      Promise.all([promiseForPost, promiseForGet]).then(function (result) {
        if ((result[0] && result[1])) {
          res.status(201).json({
          message:"Successfully added",
           posts:result[1]
          });
      }
      else{
        res.status(500).json({
          message: "Some internal error occured"
        });
      }
      }).catch(function (error) {
        res.status(500).json({
          message: "Some internal error occured"
        });
      });
    
    });


    app.get("/api/get",(req,res,next)=>{
      PostCollection.find().then(documents=>{
        res.status(200).json({
          message:'Posts fetched successful',
          posts:documents
          });
      });
      });
      
      



     

        
       

   

app.listen(3000);





