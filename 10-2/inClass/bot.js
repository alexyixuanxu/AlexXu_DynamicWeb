console.log("The bot begins...")



var Twit = require('twit');
 
var config = require('./config.js');

var T = new Twit(config);

/*
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 5 }, function(err, data, response) {
  console.log(data)
})
*/

/*
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
*/

function tweets(){
	var costume = ['ghost', 'snake', 'witch', 'pumpking', 'vampire'];
	var quote = 'For Halloween you should dress as a ' + costume[Math.floor(Math.random()*costume.length)];
	console.log(quote);

	var tweet = {
		status: quote
	}

	T.post('statuses/update', tweet, didItTweet);

	function didItTweet(err, data, response){
		if(err){
			console.log('it did not work')
		}
		else{
			console.log('it works')
		}

	}
};


tweets();