const dirfile="file.txt";

var fs = require("fs");

fs.open(dirfile,'r',(err,fd)=>{
    if(err){
        console.log('CODE ERROR',err);
    }else{
        //read
        console.log("Successfully opened " + dirfile);
    }
    
})