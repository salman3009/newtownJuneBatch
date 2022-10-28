const file = require('fs');

file.unlink('./fileTwo.txt',function(error){
    if(error){
        console.log(error);
    }
     
     });
