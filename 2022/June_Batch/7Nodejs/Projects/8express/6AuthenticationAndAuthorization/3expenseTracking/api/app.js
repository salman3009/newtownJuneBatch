const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/post');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('first middleware');
  next();
});


mongoose.connect("mongodb://localhost/authusers").then(()=>{
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

app.post("/api/register", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new Post({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Mail id already exists!",
          error:error
        });
      });
  });
});

app.post("/api/login", (req, res, next) => {
  let fetchedUser;
  Post.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Mail id not found. Please check again"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
        admin: true
      });
    })
    .catch(error => {
      return res.status(401).json({
        message: "Some exception occured. Please try after sometime"
      });
    });
});


app.get("/api/register", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetched successful',
      posts: documents
    });
  });
});

app.get("/api/checkauth", (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    req.userData = {email: decodedToken.email, userId: decodedToken.userId };
    res.status(200).json({
      message: 'you are authenticated',
      posts: req.userData
    });
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
});

module.exports = app;
