const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/post')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('first middleware');
  next();
});

// app.use((req,res,next)=>{
//     res.send('Hello from dddddddexpress!');
// });

mongoose.connect("mongodb://localhost/expense").then(()=>{
  console.log("connnected");
}).catch(
  ()=>{
    console.log("failed");
  });


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT,DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    expenseName: req.body.expenseName,
    amount: req.body.amount,
    date: req.body.date,
    paidBy: req.body.paidBy
  });
  post.save().then(documents => {
    console.log(post);
    res.status(201).json({
      message: 'Post added successfully',
      post: documents
    });
  })
});


app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetched successful',
      posts: documents
    });
  });
});


app.put("/api/posts/:id", (req, res, next) => {
  const filter = { _id: mongoose.Types.ObjectId(req.params.id)};
  const update = { ...req.body };
  Post.update(filter,update).then(result => {
    res.status(200).json({ message: "update successfully" });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(documents => {
    res.status(200).json({
      message: 'posts fetched successful',
      posts: documents
    });
  });
});

module.exports = app;
