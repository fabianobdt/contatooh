var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
//var rotas = require('../app/routes/home');
//var contatos = require('../app/routes/contato');

//var newrouter = express.Router();

module.exports = function(){
	var app = express();

	// configuracao de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('public'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	// abaixo do moddleware express.static
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	// Alteração para express-load;
	//rotas(app);
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};

