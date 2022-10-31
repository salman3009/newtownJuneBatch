const path = require('path');

var filename = path.basename('/Users/salman/demo_path.js');
console.log(filename);
console.log(path.delimiter);


var directories = path.dirname('/Users/salman/demo_path.js');
console.log(directories);

var ext = path.extname('/Users/salman/demo_path.js');
console.log(ext);