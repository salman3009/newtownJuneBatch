console.log( __filename );
console.log( __dirname );

function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setTimeout(printHello, 2000);


 function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 var t = setTimeout(printHello, 2000);
 
 // Now clear the timer
 clearTimeout(t);

 function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setInterval(printHello, 2000);


 console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")


process.on('exit', function(code) {
    // Following code will never execute.
    setTimeout(function() {
       console.log("This will not run");
    }, 0);
   
    console.log('About to exit with code:', code);
 });
 console.log("Program Ended");