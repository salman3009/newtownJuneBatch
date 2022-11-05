const express = require('express')
const bodyParser= require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');

});

// upload single file

app.post('/uploadfile',(req, res, next) => {
    const file = req.body;
    console.log(req.body); 
    res.send(file)
});

app.listen(8080,()=>{
  console.log("server is running");
})
