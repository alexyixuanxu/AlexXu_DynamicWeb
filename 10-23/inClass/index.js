const express = require('express');

const fs = require('fs');
// read data from a JSON file here
let data = fs.readFileSync('words.json');
let words = JSON.parse(data);

// express is a functio you can call throughout
const app = express();

const server = app.listen(3000, listening);
// other ports: 8000, 8080, 

function listening(){
	console.log('listening the server...');
}

app.get('/add/:word/:score', addWord);
function addWord(req, res){
	let userData = req.params;
	let word = userData.word;
	let score = Number(userData.score);
	words[word] = score;

	let data = JSON.stringify(words);
	fs.writeFile('words.json', userData, finished);
    function finished(err) {
        console.log('all set')
    } 
    let reply = {
        msg: "Thank you for your word."
    }
	res.send(reply)
}
/*
// '/a(pp)?le';
app.get('/a*le', function(req, res){
	res.send('Apple or Ale?');
});

app.get('/whoa(os)+(as)+', function(req, res){
	res.send('I know, right?!');
});

app.get('/:firstname/:lastname', function(req, res){
	let data = req.params;
	res.send('Hi '+data.firstname+' '+data.lastname);
});

app.get('/:word', function(req, res){
	let data = req.params;
	let wordArr = data.word.split('');
	let reversedWordArr = wordArr.reverse();
	let reversedWord = reversedWordArr.join('');
	res.send(reversedWord);
})

app.get('/*', function(req, res){
	res.send('nothing matched!');
});

*/