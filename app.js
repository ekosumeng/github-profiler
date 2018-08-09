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
// Todo: [x] Read the data
let request = https.request(options, (response) => {
	let body =''
	response.on('data', (data) =>{
		body = body + data
	})
	response.on('end', () =>{
		console.log(typeof body);
		// console.log(body);

	})

// ToDo: Parse the data
// Convert String ti JSON (JavaScript object)
// Todo: Print the data out

	// console.log('Got response: ', response)
})

request.end()

request.on('error', (e) => {
	console.error();(e)
})




