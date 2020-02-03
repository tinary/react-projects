const fetch = require('node-fetch');

module.exports = (app) => {

	let query;
	let location;

	app.post('/search-location', (req, res) => {
		query = req.body.query;
		location = req.body.location;
		res.redirect('/search-venues');
	})


	app.get('/search-venues', (req, res) => {
		//build api URL
		const baseUrl = 'https://api.foursquare.com/v2/venues/explore?';
		const queryUrl = 'query=';
		const nearUrl = '&near=';
		const client_info = '&client_id=FUGDM4MRQANAFZVXYTH1L5MD5FEIYU1TGVDJ5EQCVG3JDTJH&client_secret=RGV0QY4P4P3EQ1APFW3Y5TBNZWS5H2K0SPT2QR3DNJYR4AW4&v=20200101';

		//https://api.foursquare.com/v2/venues/explore?query=food&near=kitchener&client_id=FUGDM4MRQANAFZVXYTH1L5MD5FEIYU1TGVDJ5EQCVG3JDTJH&client_secret=RGV0QY4P4P3EQ1APFW3Y5TBNZWS5H2K0SPT2QR3DNJYR4AW4&v=20200101
		//https://api.foursquare.com/v2/venues/explore?query=f&near=k&client_id=FUGDM4MRQANAFZVXYTH1L5MD5FEIYU1TGVDJ5EQCVG3JDTJH&client_secret=RGV0QY4P4P3EQ1APFW3Y5TBNZWS5H2K0SPT2QR3DNJYR4AW4&v=20200101


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