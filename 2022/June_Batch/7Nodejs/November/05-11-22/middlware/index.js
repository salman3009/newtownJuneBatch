const express = require('express');
const app = express();
const employee= require('./mock.json');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log("first middelware",req.headers);
    if(req.url!="/contactDetails"){
        return next();
    }
    if(req.body.fullName!=""){
        return next();
    }
    else{
        res.status(400).json("fullName is not defined");
    }
});

app.use((req,res,next)=>{
    console.log("second middelware");
    if(req.url!="/contactDetails"){
        return next();
    }
    if(req.body.age>=50){
        return next();
    }
    else{
        res.status(400).json("age is less then 50");
    }
});

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"fetching data successfully",
        list:employee
    })
});

app.get('/contact',(req,res)=>{
    res.status(200).json({
        message:"contact is fetch successfully",
        contactList:{
            fullName:"suresh",
            age:22
        }
    });
});

app.post('/contactDetails',(req,res)=>{
   // console.log(typeof req.body);
    res.status(201).json({
        message:"successfully data is added",
        list:req.body
    });
});

app.delete('/deleteDetails/:fullName/:id',(req,res)=>{
     console.log(req.params.fullName);
     console.log(req.params.id);
     res.status(201).json("Data is deleted successfully");
});

app.get('/queryDetails',(req,res)=>{
    console.log(req.query.fullName);
    console.log(req.query.age);
    res.status(201).json("Data is successfully");
});


app.listen(8000,()=>{
    console.log("port is running");
})