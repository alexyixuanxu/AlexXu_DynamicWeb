/*
Create new variable called name and assign it a string with your name in it.

Write a function that takes a number, adds 2 to it, subtracts 5 from it, then returns a value.

Create a for loop that counts from 1 to 10.

BONUS: The Age Calculator: Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.

Store a future year in a variable.

Calculate your 2 possible ages for that year based on the stored values.

For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

Output them to the console like so: "I will be either NN or NN in YYYY", substituting the values.
*/

var name = "Alex Yixuan Xu";

function calculate(num){
	num+=2;
	num-=5;
	return num;
}

for (var i = 1; i<11; i++){
	console.log(i);
}

var birthYear = 1998;
var futureYear = 2030;
var age = futureYear - birthYear;
console.log("I will be either "+ (age-1) + " or " + age + " in "+ futureYear);