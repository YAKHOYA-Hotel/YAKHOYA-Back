//----Import
const mongoose = require('mongoose');

//----Schema d'un Utilisateur 
let UserSchema = new mongoose.Schema({
	id       : 	String,
	name : 		String,
	lastname : 	String,
	age : 		Number,
	username :	String,
	password : 	String,
	email    : 	String,
	token    : 	String,
	
});
//----Export du modele
let User = mongoose.model('User', UserSchema);
module.exports = User; 