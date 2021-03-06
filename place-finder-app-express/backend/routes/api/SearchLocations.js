const fetch = require('node-fetch');
const querystring = require('query-string');

module.exports = (app) => {

	let query;
	let location;
	

	//POST method: stores user inputs in variable query and location
	app.post('/search-location', (req, res) => {
		query = req.body.query;
		location = req.body.location;
		res.redirect('/search-venues');
	})


	//GET method: retrieves information from API string
	app.get('/search-venues', (req, res) => {
		//build api URL
		const baseUrl = 'https://api.foursquare.com/v2/venues/explore?';
		const queryUrl = 'query=';
		const nearUrl = '&near=';
		const client_info = '';

		const constructUrl = (url1, url2, query, url3, location, url4) => {
			let newUrl = url1 + url2 + query + url3 + location + url4;
			return newUrl;
		};

		const apiUrl = constructUrl(baseUrl, queryUrl, query, nearUrl, location, client_info);

		fetch(apiUrl)
			.then(res => res.json())
			.then(data => {
				res.send({ data });
			})
			.catch(err => {
				res.redirect('/error');
			});
	})

}
