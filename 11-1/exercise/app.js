/*
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
const request = require('request');
var app = express();

const apiKey = 'fbc8031e6e04e16d3366b16c447a62e2';

// required if using body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {weather: null, error: null});
});

app.post('/', function(req, res){
	res.render('index');
	// get body of your req object
	// is it cuz input is city
	console.log(req.body);

	let city = req.body.city;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
	request(url, function(err, response, body){
		if (err){
			res.render('index', {weather: null, error: 'Error, please try again'});
		}
		else{
			let weather = JSON.parse(body);
			if(weather.main == undefined){
				res.render('index', {weather: null, error: 'Error, please try again'});
			}
			else{
				// ?????????????? quotation????????????
				let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
				res.render('index', {weather: weatherText, error: null});
			}
		}
	})
});

app.listen(3000, function(){
  console.log('App listening on port 3000!');
})
*/

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'fbc8031e6e04e16d3366b16c447a62e2';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})