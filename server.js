//include express to our project
var express = require('express');

// create our application with express
var app = express();

var port = 3000;

var router = express.Router();

router.get('/', function (req, res) {
	res.json({
		'message': 'THIS IS OK!'
	});
});

app.use('/api', router);

app.listen(port);

console.log('App initialized');
