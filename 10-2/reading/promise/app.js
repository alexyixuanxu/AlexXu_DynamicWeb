var userDetails;
function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/xuyixuan1998',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject){
    // Do async job
    // request.get makes a GET request to the Github API
	//body consists of the JSON response from the server
		request.get(options, function(err, resp, body){
            if (err) {
                reject(err);
            } 
            else {
                resolve(JSON.parse(body));
            }
        })
    })
}

function main() {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails)
    }, function(err) {
        console.log(err);
    })
}

main();

// ?????????????????????? request not defined????????????????????