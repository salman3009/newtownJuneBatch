console.log("hello world");
const http = require('http');
const app = require('./api/app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);



// const server = http.createServer((req,res)=>{
//     res.end('This ismy first response');
// });

// server.listen(process.env.PORT || 3000);

