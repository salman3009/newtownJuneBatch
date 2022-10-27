var fs = require('fs');

//sync code
try{
    fs.unlinkSync('file2.txt');
}catch(err)
{
    console.log("Error while deleting the file"+err);
}

//async code
// fs.unlink('file.txt',function(err){
//     if(err){
//      console.log("Error while deleting the file"+err);
//     }
// });

