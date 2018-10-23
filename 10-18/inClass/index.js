// put up package.json
console.log('index.js is running!');

const express = require('express');
// express is a functio you can call throughout

const app = express();

const server = app.listen(3000, listening);
// other ports: 8000, 8080, 

function listening(){
	console.log('listening the server...');
}

app.use(express.static('public'));

app.get('/hello', sayHello);

function sayHello(request, response){
	response.send('hellooooooo to you');
}

// database is now a variable cuz of:
app.get('/hi/:database/:num', sayHi);
// if you go to... http://localhost:3000/hi/Alex, 

function sayHi(request, response){
	const data = request.params;
	// params: keys and values

	let message = '';
	for (let i=0; i<data.num; i++){
		message+='Hi '+data.database + '. How are you?';
	}
	response.send(message);
}