var Twit = require('twit');
 
var config = require('./config.js');

var T = new Twit(config);

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 5 }, function(err, data, response) {
  console.log(data)
})

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})

