
var express = require('express');
var app = express();
var path = require('path');

 
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
   
app.get('/', function (req, res, next) {
    res.render('home.ejs');
});
 


app.listen(8000, () => console.log('The server is running port 8000...'));
