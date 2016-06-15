var contatos = [
	{
		_id: 1,
		nome: "Contato 1",
		email: "contato1@email.com"
	},
	{
		_id: 2,
		nome: "Contato 2",
		email: "contato2@email.com"
	},
	{
		_id: 3,
		nome: "Contato 3",
		email: "contato3@email.com"
	}
];


module.exports = function(){
	var controller = {};
	
	controller.listaContatos = function(req, res){
		//
	};
	
	return controller;
};