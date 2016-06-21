// Implementando persistencia
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({ 
		nome: {
			type: String,
			required: true

		},
		email: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		}, 
		telefone: {
			type: String,
			required: true
		},
		dataNacimento: {
			type: String,
			required: false
		}
	});

	return mongoose.model('Cliente', schema);
};