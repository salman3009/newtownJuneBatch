const axios = require("axios");


axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result)=>{
  console.log(result.data);
});