const express = require('express')
var request = require('request')
const app = express()
const port = 5000

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/newEndpoint', (req, res) => res.send('This is my end point!'))

// app.get('/getWeatherToronto', (req, res) => {
//   request(
//     "http://api.weatherstack.com/current?access_key=285530b4d9e715c878b6726390f0ca2e&query=Toronto",
//     function(error, response, body) {
//       if (!error && response.statusCode == 200) {
//         var parsedBody = JSON.parse(body);
//         var temp_c = parsedBody['current']['temperature']
//         res.send({temp_c});
//       }
//     }
//   );
// });


app.get('/getAPI', (req, res) => {
  var params = req.query
  request(
    "https://api.foursquare.com/v2/venues/explore?",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var parsedBody = JSON.parse(body);
        var temp_c = parsedBody['current']['temperature']
        req.send(params);
      }
    }
  );
});


getVenues = (query, location) => {
  const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';
  const params = {
    client_id: "FUGDM4MRQANAFZVXYTH1L5MD5FEIYU1TGVDJ5EQCVG3JDTJH",
    client_secret: "RGV0QY4P4P3EQ1APFW3Y5TBNZWS5H2K0SPT2QR3DNJYR4AW4",
    //ll: this.state.userLocation,
    query: query,
    near: location,
    v: '20200101'
  };
  // console.log("query: " + query);
  // console.log("near: " + location);

  axios.get(venuesEndpoint + new URLSearchParams(params), {
  }).then(response => {
    this.setState({ isLoading: false, venues: [] });
    if (response.data.response.groups[0].items !== undefined) {
      //{console.log(result.response.groups[0].items)}
      this.setState({ venues: response.data.response.groups[0].items })
    }
  }).catch((error) => {
    this.setState({ isLoading: false, venues: [] });
  });
};



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

