const fs = require('fs');
const path = require('path');

module.exports = (app) => {
	// loads all api files
	fs.readdirSync('routes/api/').forEach((file) => {
		require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
	})
}
