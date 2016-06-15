var http = require('http');
var express = require('express');
var controller = require('./app/controller/home');

//var app = require('./config/express')();
var app = express();

app.set('port', 3000);
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.get('/index', controller.index);
app.get('/', controller.index);


//home(app);



http.createServer(app).listen(app.get('port'), function () {
	console.log('Express Server escutando na porta ' +
		app.get('port'));
});