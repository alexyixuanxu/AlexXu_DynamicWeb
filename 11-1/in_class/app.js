var express = require('express');
var app = express();
var ejs = require('ejs');

// set the engine thats going to render your view
app.set('view engine', 'ejs');

var data = {
	groceries: 
	[
	{
		store: 'Acme',
		list: ['strawberries','blueberries','yogurt']
	},
	{
		store: 'Corner Market',
		list: ['baguette', 'basil', 'tomatoes']
	}
	]
}

app.get('/', function(request, response){
	response.render('index', {groceryitems: data.groceries});
});

app.get('/date', function(request, response){
	response.render('date');
});

// rendering a simple 
app.get('/name', function(request, response){
	// {name} matches the view, name is a variable here
	response.render('name', {name: 'Alex'});
});


app.listen(3000, function(){
	console.log('app is running on port 3000');
});