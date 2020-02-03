const express = require('express');
const bodyParser = require('body-parser');
const url = require('https://api.foursquare.com/v2/venues/explore?');
const querystring = require('querystring');
const Article = require('./models').Article;

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Function to handle the root path
app.get('/', async function(req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let query = req.query.query;
    let near = req.query.near;

    let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

    // Return the articles to the rendering engine
    res.render('index', {
        articles: articles
    });
});

let server = app.listen(8080, function() {
    console.log('Server is listening on port 8080')
});