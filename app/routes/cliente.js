module.exports = function(app){

	var controller = app.controllers.cliente;

	/*
	app.get('/contatos', controller.listaTodos);
	app.post('/contatos', controller.salvaContato);
	app.get('/contatos/:id', controller.obtemContato);
	app.delete('/contatos/:id', controller.removeContato);
	*/

	// Utilizando sistema de rotas
	app.route('/clientes')
		.get(controller.listaTodos)
		.post(controller.salvaCliente);
	app.route('/clientes/:id')
		.get(controller.obtemCliente)
		.delete(controller.removeCliente);
	
};