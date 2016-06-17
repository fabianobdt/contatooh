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
	},
	{
		_id: 4,
		nome: "Contato 4",
		email: "contato4@email.com"
	}
];

var ID_CONTATO_INC = 4;

module.exports = function(){
	var controller = {};
	
	controller.listaTodos = function(req, res){
		res.json(contatos);
	};
	
	controller.salvaContato = function(req, res){
		var contato = req.body;
		contato = contato._id ? atualiza(contato) : adiciona(contato);
		res.json(contato);
	};
	
	function adiciona(contatoNovo){
		contatoNovo._id = ++ID_CONTATO_INC;
		contatos.push(contatoNovo);
		return contatoNovo;
	}

	function atualiza(contatoAlterar){
		contatos = contatos.map(function(contato){
			if(contato._id == contatoAlterar._id){
				contato = contatoAlterar;
			}
			return contato;
		});
		return contatoAlterar;
	}

	controller.obtemContato = function(req, res){
		var	idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};
	
	controller.removeContato = function(req, res){
		var idContato = req.params.id;
		console.log('API: removeContato:' + idContato);
		contatos = contatos.filter(function(contato){
			return contato._id != idContato;
		});
		res.send(204).end();
	};
	
	return controller;
};