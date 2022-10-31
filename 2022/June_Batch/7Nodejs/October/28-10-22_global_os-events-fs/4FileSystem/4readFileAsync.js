const file = require('fs');

file.readFile('./fileOne.txt','utf-8',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }   
});
