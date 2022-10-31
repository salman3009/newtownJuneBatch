const http = require('http');
const fs = require('fs');
let readStream = fs.createReadStream(__dirname+'/read.txt','utf8');
http.createServer(function(req,res){
    readStream.on('data',function(chunk){
        res.write(chunk);
        res.end();
    });
}).listen(8000);



