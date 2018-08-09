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