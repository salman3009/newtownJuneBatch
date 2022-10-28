const file = require('fs');

file.readFile('./fileOne.txt','utf-8',function(error,data){
    console.log(data);
});
