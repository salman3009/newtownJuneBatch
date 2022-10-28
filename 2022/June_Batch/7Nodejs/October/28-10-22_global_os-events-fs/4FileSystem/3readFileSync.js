const file = require('fs');

const result = file.readFileSync('./fileOne.txt','utf-8');
console.log(result);