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


  mongoose.connect("mongodb://admin:admin123@ds241664.mlab.com:41664/dhana").then(()=>{
    console.log("connnected");
  }).catch(
    ()=>{
      console.log("failed");
    });







    app.post("/api/post", async (req, res, next) => {
      debugger;
      
    
      try{

        const temp = new PostCollection({
          id:req.body.id,
          name:req.body.fullname,
          reason:req.body.reason
         });
          
         const p1= await temp.save();
         
         const p2 = await PostCollection.find();


         res.status(200).json({
          message:"successfully updated",
          data:p2
        });
      }
      catch(err){
        res.status(400).json({
          message:"error"
        });
      }
     
  
    
    




    
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





