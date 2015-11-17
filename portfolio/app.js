var express = require('express');
var app = express();
var request = require('request');


// app.get('/', function(req, res) {
// 	res.send('Hello World');
// });
var app = express();
app.use("/public", express.static(__dirname + '/public'));
app.set('view engine', 'jade');



app.get('/', function(req, res) {
    res.render('index', { title: 'Branden Francis | Industrial Design'});
});


app.listen(8080);

