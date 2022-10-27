var fs = require('fs');
console.log('Excuted Before File Reading');

//async code
fs.readFile('./file.txt','utf8',function(error,data){
    console.log(data);
});

//sync node
// var data=fs.readFileSync('./file.txt','utf8');
// console.log(data);

console.log('Excuted After file Reading probably');