const express = require('express');
const app = express();
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
  
app.get('/test', function(req, res) {
    res.sendFile('test.html', {root: __dirname })
});
app.listen(3001);