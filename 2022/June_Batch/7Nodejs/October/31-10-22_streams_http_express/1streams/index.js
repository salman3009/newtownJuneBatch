const fs = require('fs');

let readStream = fs.createReadStream(__dirname+'/read.txt','utf8');

//event emitter
//small chunks of data
//whole data will not store in memory
//memory efficient
//time efficient
//async code
readStream.on('data',function(chunk){
    console.log("data is",chunk);
});

