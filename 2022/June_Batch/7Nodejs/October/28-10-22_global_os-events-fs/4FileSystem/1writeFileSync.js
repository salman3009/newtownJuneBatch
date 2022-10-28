const file = require('fs');

console.log("first line of file");

const data="This is written in the file and we will get result there";

const result = file.writeFileSync('./fileOne.txt',data,'utf-8',function(error){
    if(error){
        console.log(error);
    }
});

console.log("last line of file");