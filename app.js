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

	// ToDo: [x] Parse the data
	// Convert String ti JSON (JavaScript object)
	let profile = JSON.parse(body)
	// Todo:[x] Print the data out
	// console.log(profile.login + 'owns' + profile.name + 'name');
	// Cara Yanng Peraktis
	console.log(`${profile.login} owns ${profile.name} Name And has ${profile.followers} followers`);
	})

})

request.end()

request.on('error', (e) => {
	console.error();(e)
})




