Here's all you have to do to add clustering to your node.js application.
- save this code as `cluster.js`, and run `cluster.js` instead of `server.js` (or /bin/www, or whatever it's called for your project)
- the only line you'll need to change is the last line - it needs to point to the location of your `server.js` file

```javascript
var cluster = require('cluster');

if (cluster.isMaster) {
  // Count the machine's CPUs
  var cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on('exit', function () {
    cluster.fork();
  });
} else {
  require('./server');
}
```