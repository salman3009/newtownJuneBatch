

//create a server object:
let http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080


// let http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.write(req.url);
//   res.end();
// }).listen(8080);



//http://localhost:8080/?year=2017&month=July
// let http = require('http');
// let url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   let q = url.parse(req.url, true).query;
//   let txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);