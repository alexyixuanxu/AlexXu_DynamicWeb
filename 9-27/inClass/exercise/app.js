var setDifferenceMod = require('./set-difference');

var setIntersectionMod = require('./set-intersection');

// !!!!!!note: we cannot use splice() for this because it would changes the original array!

var set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];

var set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];

var difference = setDifferenceMod.setDifference(set1, set2);

var intersection = setIntersectionMod.setIntersection(set1, set2);

//should print an array with cats, red, bananas, movies, blue, horses, rain as elements
console.log(difference);

//should print an array with dogs and code as elements
console.log(intersection);