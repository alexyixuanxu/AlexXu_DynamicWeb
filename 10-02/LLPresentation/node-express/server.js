// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*
Installed some pakages:
body-parser − This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.

cookie-parser − Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

multer − This is a node.js middleware for handling multipart/form-data.
*/

/*
Express provides a built-in middleware 
(software that acts as a bridge between an operating system 
or database and applications, especially on a network.) 
express.static to serve static files, such as images, CSS, JavaScript, etc.
You simply need to pass the name of the directory 
where you keep your static assets, 
to the express.static middleware to start serving the files directly.
For example, if you keep your images, CSS, and JavaScript files 
in a directory named public, you can do this −
*/
app.use(express.static('public'));
// go to http://localhost:8081/images/patrick.jpg

// Express application uses a callback function whose parameters
// are request and response objects.

/*
Request Object − The request object represents the HTTP request 
and has properties for the request query string, 
parameters, body, HTTP headers, and so on.

Response Object − The response object represents the HTTP response 
that an Express app sends when it gets an HTTP request.
*/


// access http://127.0.0.1:8081/index.html

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
// https://expressjs.com/en/guide/routing.html
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	// console.log takes format string as a first parameter:
	// https://www.w3resource.com/node.js/nodejs-console-logging.php#console-log
	// three format character %s (represent string), %d (represent integer), and %j 
	console.log("Example app listening at http://%s:%s", host, port);
})