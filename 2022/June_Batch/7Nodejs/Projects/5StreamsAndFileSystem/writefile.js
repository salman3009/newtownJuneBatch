var fs = require('fs');
console.log('Excuted Before File Reading');


//async node
var data=fs.writeFile('./file2.txt','Hello Rajesh \'s up?!','utf8',function(error){
if(error) throw error;
console.log('file written');
});


console.log('Excuted After file Reading probably');