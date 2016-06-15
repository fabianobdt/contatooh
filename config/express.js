var express = require('express');
var load = require('express-load');
//var rotas = require('../app/routes/home');
//var contatos = require('../app/routes/contato');

//var newrouter = express.Router();

module.exports = function(){
	var app = express();

	// configuracao de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('public'));
	
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

