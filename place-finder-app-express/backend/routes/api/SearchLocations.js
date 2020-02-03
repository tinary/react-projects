//const fetch = require('node-fetch');

module.exports = (app) => {

  let query;
  let location;

  //////// Tina: not sure how many req can consume if have two variables
	app.post('/search-location', (req, res) => {

    query = req.body.query;
		location = req.body.location;
		
		console.log("query: " + query);
		console.log("location: " + location);

		if(query === "" || location === "" || query === undefined || location === undefined) {
			res.redirect('/error');
		} else { 
			res.redirect('/search-venues');
		}
	})


	app.get('/search-venues', (req, res) => {
		//build api URL
    const baseUrl = 'https://api.foursquare.com/v2/venues/explore?';	

    const queryUrl = 'query=';
    const nearUrl = '&near=';
    const client_id = '&client_id=FUGDM4MRQANAFZVXYTH1L5MD5FEIYU1TGVDJ5EQCVG3JDTJH';
    const client_secret = '&client_secret=RGV0QY4P4P3EQ1APFW3Y5TBNZWS5H2K0SPT2QR3DNJYR4AW4';
    const version = '&v=20200101';
    

		const constructUrl = (url1, url2, url3, url4, url5, url6, query, location) => {
		   let newUrl = url1 + url2 + url3 + url4 + url5 + url6 + query + location;
		   return newUrl;
		};	

		const apiUrl = constructUrl(baseUrl, queryUrl, query + nearUrl + location + client_id + client_secret + version);
		
		console.log(apiUrl);
    
    //fetch(`https://api.foursquare.com/v2/venues/explore?query=coffee&near=kitchener&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20200101`)


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