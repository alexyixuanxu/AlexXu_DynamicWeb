const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');
const fs = require('fs');
const app = express();

// read data from the JSON file
let myFile = fs.readFileSync('users.json');
//this line parses the raw data to make it readable and interprets it as a JavaScript object
let myData = JSON.parse(myFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// sign up route
app.get('/', function(req, res){
	res.render('signup', {success: null, error: null});
});

app.post('/', function(req, res){
	let username = req.body.username;
	let password = req.body.password;
	let confirm_password = req.body.confirm_password;

	let repeatUsername = false;

	// check for validity
	// check if username already exist
	for (let i=0; i<myData.length; i++){
		if (myData[i].username === username){
			repeatUsername = true;	
		}
	}

	// if repeat, render error
	if (repeatUsername){
		res.render('signup', {success: null, error: 'Username already exists, try again!'});
	}
	// no repeat, move on to check password
	else{
		// check two passwords are the same
		if (password===confirm_password){
			// password matched! write into file!
			myData.push({username: username, password: password});
			let finalData = JSON.stringify(myData);
			fs.writeFile('users.json', finalData, finished);
			function finished(err) {
				console.log('file written: '+req.body);
			}

			// render success!
			res.render('signup', {success: "You have successfully registered! Don't forget your username is: "+username, error: null});
		}
		else{
			res.render('signup', {success: null, error: "Passwords don't match, try again!"});
		}		
	}
});

// log in route
app.get('/login', function(req, res){
	res.render('login', {error: null});
});

app.post('/login', function(req, res){
	let username = req.body.username;
	let password = req.body.password;

	let userFound = false;
	let userIndex = null;

	// find if username exist
	for (let i=0; i<myData.length; i++){
		// if exist, move on to check password
		if (myData[i].username === username){
			userFound = true;
			userIndex = i;
		}
		
	}

	// found user after loop, compare password
	if (userFound){
		if (password === myData[userIndex].password){
			// move on to voting if everything matches!
			res.redirect('/vote');
		}
		else{ 
			res.render('login', {error: 'Wrong password! Oops!'});
		}
	}
	// no such username, render error
	else{
		res.render('login', {error: 'No username found! Try again!'});
	}

});

// actual app route
app.get('/vote', function (req, res){
	res.render('vote', {userInput: null, imgLinksArr: null, error: null});
});

app.post('/vote', function (req, res){
	let pet = req.body.pet;
	let num = req.body.num;
	// check whether a selection is made
	if ("pet" in req.body){
		// check whether input number is positive integer>=1 and <=100
		if (Number.isInteger(Number(num)) && Number(num)>=1 && Number(num)<=100){
			let url = `http://shibe.online/api/${pet}?count=${num}`;
			request(url, function(err, response, body){
				// if error getting data from api
				if(err){
					res.render('vote', {userInput: null, imgLinksArr: null, error: 'Error getting images...please try again...'});
				}
				else{
					let dataArr = JSON.parse(body);
					res.render('vote', {userInput: req.body, imgLinksArr: dataArr, error: null});
				}
			});
		}
		// gives error message is not valid number
		else{
			res.render('vote', {userInput: null, imgLinksArr: null, error: 'Not a valid number (1-100)!'});
		}
	}
	// if user did not make a selection
	else{
		res.render('vote', {userInput: null, imgLinksArr: null, error: 'You have to select something!'});
	}

});

app.listen(3000, function () {
  console.log('App listening on port 3000');
})