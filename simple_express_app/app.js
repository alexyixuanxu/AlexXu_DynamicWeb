const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res){
	res.render('index', {userInput: null, imgLinksArr: null, error: null});
});

app.post('/', function (req, res){
	let pet = req.body.pet;
	let num = req.body.num;
	console.log(req.body);
	// check whether a selection is made
	if ("pet" in req.body){
		// check whether input number is positive integer>=1 and <=100
		if (Number.isInteger(Number(num)) && Number(num)>=1 && Number(num)<=100){
			let url = `http://shibe.online/api/${pet}?count=${num}`;
			console.log(url);
			request(url, function(err, response, body){
				// if error getting data from api
				if(err){
					res.render('index', {userInput: null, imgLinksArr: null, error: 'Error getting images...please try again...'});
				}
				else{
					let dataArr = JSON.parse(body);
					console.log(dataArr);
					res.render('index', {userInput: req.body, imgLinksArr: dataArr, error: null});
				}
			});
		}
		// gives error message is not valid number
		else{
			res.render('index', {userInput: null, imgLinksArr: null, error: 'Not a valid number (1-100)!'});
		}
	}
	// if user did not make a selection
	else{
		res.render('index', {userInput: null, imgLinksArr: null, error: 'You have to select something!'});
	}

});

app.listen(3000, function () {
  console.log('App listening on port 3000');
})