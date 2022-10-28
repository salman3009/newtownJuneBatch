const eventEmitter = require('events');

const event = new eventEmitter();

event.on('add',function(a,b){
    console.log("addition is called",a+b);
});

event.on('sub',function(a,b){
    console.log("subtraction is called",a-b);
});

event.removeAllListeners('add');

event.emit('add',3,4);
event.emit('sub',5,6);
