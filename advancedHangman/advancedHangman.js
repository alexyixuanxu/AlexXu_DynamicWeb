var arrWords = ['FOOL', 'FOX', 'FAME', 'FABULOUS'];

// the game object
function hangman(arrWords){
  this.arrWords = arrWords;

  // min inclusive, max exclusive
  function getRandomInt(min, max){
    var randomInt = Math.floor(Math.random() * (max - min)) + min;
    return randomInt;
  }

  // select a random word
  function selectWord(arrWords){
    var word = arrWords[getRandomInt(0, arrWords.length)];
    var arrWord = [];
    for (var i=0; i<word.length; i++){
      arrWord.push(word[i]);
    }
    return arrWord;
  }

  this.arrWord = selectWord(this.arrWords);
  
  function findEmptyGuess(arrWord){
    var arrGuess = [];
    for (var j=0; j<arrWord.length; j++){
      arrGuess.push('_');
    }
    return arrGuess;
  }

  this.arrGuess = findEmptyGuess(this.arrWord);
  this.arrAllGuess = []; // array to store all the guesses
  this.repeatLetter = false;
  this.foundLetter = false;
  this.foundWord = false;
  this.won = false;
  this.numLives = 8;

  // before guessing, show _ _ _ _...
  console.log("Let's play hangman!");
  console.log('You have ' + this.numLives + ' lives.');
  console.log(this.arrGuess);

  this.guess = function(guessedLetter){

    // convert everything to uppercase
    var guessedLetterCap = guessedLetter.toUpperCase()

    // check if it's a repeated letter
    for (var k=0; k<this.arrAllGuess.length; k++){
      if (guessedLetterCap===this.arrAllGuess[k]){
        this.repeatLetter = true;
      }
    }
    // if it's a repeated letter, just tell so
    if (this.repeatLetter === true){
      console.log('\nYou have already guessed that. Try something else.');
      console.log('You have ' + this.numLives + ' lives left.');
      this.repeatLetter = false;
    }
    // if it is a new letter, proceed
    else{
      this.arrAllGuess.push(guessedLetterCap)
      // if made less than 8 mistakes
      if (this.numLives >= 0){
        for (var i=0; i<this.arrWord.length; i++){
          if (guessedLetterCap===this.arrWord[i]){
            this.foundLetter = true;
            this.arrGuess[i]=this.arrWord[i];
          }
        }
        if (this.foundLetter === true){
          console.log('\nYou got a new letter! Congratulations!');
          console.log('You have ' + this.numLives + ' lives left.');
          console.log(this.arrGuess);

          // set found letter back to false
          this.foundLetter = false;

          // check if all the letters are guessed
          if (this.arrWord.toString() === this.arrGuess.toString()){
            this.won = true;
            console.log('\nCongratulations! You have won the game!');
          }
        }
        else {
          this.numLives -= 1;
          console.log('\nSorry, the word does not include that letter');
          console.log('You have ' + this.numLives + ' lives left.');
          console.log(this.arrGuess);
        }
        
      }
      if (this.numLives === 0 && this.won === false){
        console.log('\nOops, you lose.')
        console.log('______________\n      |     ||\n      O     ||\n     /|\\    ||\n     / \\    ||\n            ||\n           ----')
      }
    }
  }
}

var game = new hangman(arrWords);
game.guess('o');
game.guess('a');
game.guess('b');
game.guess('c');
game.guess('f');
game.guess('f');
game.guess('f');
game.guess('f');

// if you want a second game...
var game2 = new hangman(arrWords);
game2.guess('o');
game2.guess('a');
game2.guess('b');
game2.guess('c');
game2.guess('f');
game2.guess('f');
game2.guess('f');
game2.guess('f');