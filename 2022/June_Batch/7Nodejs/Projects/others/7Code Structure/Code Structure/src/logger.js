var winston = require('winston');
var fs = require('fs');
var logDir = 'logs/common';
// Create the log directory if it does not exist
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
var tsFormat = () => (new Date()).toLocaleTimeString();
module.exports = winston.createLogger({
  transports: [
    new (require('winston-daily-rotate-file'))({
      filename: `${logDir}/-results.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      json: false
    })
  ]
});



