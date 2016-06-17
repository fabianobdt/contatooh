var mongoose = require('mongoose');

module.exports = function(uri){

	//mongoose.connect(uri);
	// Aumentando o pool de conexões
	mongoose.connect(uri, {server:{poolSize:15}});

	mongoose.connection.on('connected', function(){
		console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose! Desconectado de ' + uri);
	});

	mongoose.connection.on('error', function(){
		console.log('Mongoose! Erro de conexão: ' + uri);
	});

	// Fecha a conexao quando a aplicação é terminada com "Ctrl + C" no terminal.
	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Mongoose Desconectado pelo término da aplicação.');
			process.exit(0); // 0 indica que a finalização ocorreu sem erros 
		});
	});

	// habilitando debbuger
	mongoose.set('debug', true);
};