var express = require('express');
var app = express();
var path = require('path');

// app.get('/', function(req, res) {
// 	res.send('Hello World');
// });
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(8080);

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app is listening at http', host, port);
});