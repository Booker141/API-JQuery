const express = require('express');
const app = express();
const logger = require('morgan');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const baseAPI = '/api/v1';
const audienceService = require('./routes/audience-service');
const audience = require('./routes/audience');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/audience', audience);

app.get('/', function (req, res) {
	res.send('¡API en funcionamiento!');
});

const server = http.createServer(app);

audienceService.connectDb(function (err) {
	if(err){
		console.log('Could not connect with MongoDB - audienceService');
		process.exit(1);
	}
	
	server.listen(PORT, function() {
		console.log('Server up and running on localhost:' + PORT);
	});
});