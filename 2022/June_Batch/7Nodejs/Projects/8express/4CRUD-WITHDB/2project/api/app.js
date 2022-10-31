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



// mongoose.connect("mongodb://admin:admin123@ds241664.mlab.com:41664/dhana").then(() => {
//   console.log("connnected");
// }).catch(
//   () => {
//     console.log("failed");
//   });


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
    id: req.body.id,
    name: req.body.name
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


app.put("/api/posts", (req, res, next) => {

  const filter = { _id: mongoose.Types.ObjectId(req.body.id)};
  const update = { name: req.body.name };
  Post.update(filter, { $unset: { reason: 1 } }).then(result => {
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
