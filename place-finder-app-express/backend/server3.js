// grab the packages we need
var express = require('express');
var app = express();
const port = 5000


// routes will go here
app.get('/api/:query', function(req, res) {
  var client_id = req.param('client_id');
  var client_secret = req.param('client_secret');
  var query = req.param('query');
  var near = req.param('query'); 
  var v = '20200101';

  res.send(client_id + ' ' + client_secret + ' ' + query + ' ' + near + ' ' + v);
});


// parameter middleware that will run before the next routes
app.param('name', function(req, res, next, name) {

  // check if the user with that name exists
  // do some validations
  // add -dude to the name
  var modified = name + '-dude';

  // save name to the request
  req.name = modified;

  next();
});

// http://localhost:8080/api/users/chris
app.get('/api/users/:name', function(req, res) {
  // the user was found and is available in req.user
  res.send('What is up ' + req.name + '!');
});




// start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))