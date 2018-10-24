// get the modules 
const express = require('express');
const fs = require('fs');

// express is a function to be called throughout
const app = express();

// start a public folder
// this is because our p5 sketch uses the json file
app.use(express.static('public'));

// start a server at localhost/3000
const server = app.listen(3000, listening);
function listening(){
	console.log('listening...');
}

// read data from the JSON file
let myFile = fs.readFileSync('./public/records.json');

//this line parses the raw data to make it readable and interprets it as a JavaScript object
let myData = JSON.parse(myFile);

// here's an array of all valid shapes
const shapeArr = ['circle', 'ellipse', 'rectangle', 'square', 'triangle'];

// boolean to keep track
let validShape = false;

app.get('/:shape/:num', addItem);
function addItem(req, res){
	let userData = req.params;
	
	// check if a valid shape is given
	for (let i=0; i<shapeArr.length; i++){
		// a valid shape
		if (userData.shape === shapeArr[i]){
			validShape = true;
			// check if a valid integer other than 0 is given!
			// a valid integer
			if (Number.isInteger(Number(userData.num))){
				let shape = userData.shape;
				let num = Number(userData.num);
				// add into json file
				myData[shape] = num;

				// make sure the final data added is readable
				let finalData = JSON.stringify(myData);
				// write the valid data into our file
				fs.writeFile('./public/records.json', finalData, finished);
				function finished(err) {
					console.log('file written!');
				} 

				// all valid! direct the user to drawing page 
				res.redirect('/sketch.html');
			}
			// not a valid integer
			else{
				res.send(userData.num + ' is not a valid integer!');
			}

		}
		// not a valid shape
		else{
			validShape = false;	
		}	
	}

	// if after loop, the user input is still not a valid shape
	if (validShape === false){
		res.send(userData.shape + ' is not a valid shape...valid shapes are ' + shapeArr);
	}
}

// this route leads to the sketch!
app.get('/sketch.html', function(req, res){
	 res.sendFile( __dirname + '/sketch.html');
})

// this route, to allow seeing the file!
app.get('/records', function(req, res){
	res.send(myData);
});

// this route. if nothing else matched
app.get('/*', function(req, res){
	res.send('I take a shape (' + shapeArr + ') and a positive integer in the path!')
});
