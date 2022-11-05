const express = require('express');

const bodyParser = require("body-parser");

const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    console.log('first middleware');
    next();
});

// app.use((req,res,next)=>{
//     res.send('Hello from dddddddexpress!');
// });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

  app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'Post added successfully'
    });
  });

  
app.get("/api/posts",(req,res,next)=>{
const posts=[
    {
        id:"dad1212",
        title:"Frist server-sixe post",
        content:"This is coming from the server"
    },
    {
        id:"faf2323",
        title:"Second server",
        content:"This is second server"
    }
];
res.status(200).json({
message:'Posts fetched successful',
posts:posts
});
});


app.get("/api/sendfile",(req,res,next)=>{
  var options = {
    root: path.join(__dirname)
  };
var fileName = 'hello.txt';
res.sendFile(fileName, options, function (err) {
    if (err) {
        next(err);
    } else {
        console.log('Sent:', fileName);
    }
});
});


app.get("/api/send",(req,res,next)=>{
  res.send('<h1>Hello world</h1>');
});

app.get("/api/params/:id",(req,res,next)=>{
  const id = req.params.id;
  res.send(id);
});

//http://localhost:3000/api/query?page=2&limit=3
app.get("/api/query",(req,res,next)=>{
  let page = req.query.page;
  let limit = req.query.limit;
  res.send(`page:${page} and limit ${limit}`);
});




module.exports = app;