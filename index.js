//Importing express and body-parser modules
//Express is Node.js web application framework
var express = require('express');
//Parses the text as JSON and exposes the resulting object on req.body
var bp = require('body-parser');

var app = express();
app.use(bp.json());

//Home route
//Route: http://localhost:3000/random
app.use('/random', require('./ctrl'));

//Initilizing node server at 3000 port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App is listening at http://%s:%s', host, port);
});