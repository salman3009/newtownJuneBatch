const express = require('express');
const app = express();


app.use((req,res,next) => {
    console.log("frontend request is coming");
    return next();
});

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    return next();
});

app.get('', (req, res) => {

    let employee = [{
        fullName: "akash",
        age: 33,
        location: "Bangalore"
    }, {
        fullName: "suresh",
        age: 22,
        location: "Delhi"
    },
    {
        fullName: "ram",
        age: 11,
        location: "Pune"
    }];

    res.status(200).json({
        message:"successfully sent",
        list:employee
    });

});


app.listen(8080, () => {
    console.log("server is running on port 8080");
})