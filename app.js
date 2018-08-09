// Problem: We need a simple to look at GitHub Profile
// Solusi : Use NodeJS to connect to GitHub API to get Profile info and print out to the console

// ToDo: [x] Connect to GitHub API
let https = require('https');

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/ekosumeng',
	method: 'GET',
	headers: {
		'user-agent': 'nodejs'
	}

}

let request = https.request(options, (result) =>{
	console.log('Got response: ', result.statusCode)
})

request.end()

request.on('error', (e) => {
	console.error();(e)
})


// Todo: Read the data
// ToDo: Parse the data
// Todo: Print the data out