const express = require('express');
const app = express();
const employee= require('./mock.json');
const bodyParser = require("body-parser");

app.use(bodyParser.json());



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

app.post('/contact',(req,res)=>{
    console.log(typeof req.body);
    res.status(201).json({
        message:"successfully data is added",
        list:req.body
    });
});


app.listen(8000,()=>{
    console.log("port is running");
})