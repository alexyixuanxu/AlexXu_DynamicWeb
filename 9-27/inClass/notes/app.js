// node allows you to run js outside of the browser
// check if node is working... go into the file directory, type in terminal: node fileName
console.log("Node is working...");

// which files are going to be connecting to this file
// even if in the same directory, you still need ./
const greeter = require('./index.js');

greeter.hello('Alex');
greeter.bye('Alex');

// use greetings.js as a module connected to app.js
const chineseGreeter = require('./greetings.js');

chineseGreeter.hello('Alex');
chineseGreeter.bye('Alex');