var path = require('path');

var filename = path.basename('/Users/salman/demo_path.js');
console.log(filename);
console.log(path.delimiter);

var directories = path.dirname('/Users/salman/demo_path.js');
console.log(directories);
var path = require('path');

var ext = path.extname('/Users/salman/demo_path.js');
console.log(ext);

var path = require('path');
var obj = { dir: 'C:\\salman\\Refsnes', base: 'demo_path.js' }
var p = path.format(obj);
console.log(p);