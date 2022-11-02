const http = require('http');
const fs = require('fs');
let stream = fs.createReadStream(__dirname+'/read.txt','utf8');
http.createServer(function(req,res){
    stream.on('data',function(input){
        res.write(input);
        res.end();
    });
}).listen(8000);



