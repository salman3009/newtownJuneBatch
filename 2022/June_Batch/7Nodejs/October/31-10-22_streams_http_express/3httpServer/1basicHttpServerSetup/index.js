const http = require('http');

//http is use to create web server

http.createServer(function(req,res){
    //request(req) - that is coming from frontend
    //response(res) - we are sending now from backend
    res.write("Hello world");
    res.end();
}).listen(8000);


//http://localhost:8000
