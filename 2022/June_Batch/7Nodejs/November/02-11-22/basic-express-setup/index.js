const express = require('express');
const app = express();


app.get('',(req,res)=>{
    res.send("hello world");
});

app.get('/about',(req,res)=>{
    res.send("This is about page");
});

app.get('/contact',(req,res)=>{
    res.send("<h1>Welcome to nodejs</h1><h2>Template engine</h2>");
})



app.listen(8080,()=>{
    console.log("our application is listening on port 8080");
});
