// if we try to use this in other files we need to export this
// allows code to be exported as an object
module.exports = {
	hello: function(name){
		console.log('Hello, ' + name);
	},
	bye: function(name){
		console.log('Goodbye, ' + name);
	}
};