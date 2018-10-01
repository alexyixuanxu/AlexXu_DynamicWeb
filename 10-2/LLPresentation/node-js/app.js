// in doc module
// The HTTP module can create an HTTP server that listens to server ports 
// and gives a response back to the client.
let http = require('http');
// import module
let sayHi = require('./say-hi-mod.js');


http.createServer(function (req, res) {
	console.log('server running...');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(sayHi.sayHelloWorld);
    res.end();
}).listen(8080);