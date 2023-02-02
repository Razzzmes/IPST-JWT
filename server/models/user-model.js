const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
	name: {type: String, require: true},
	surname: {type: String, require: true},
	middlename: {type: String},
	email: {type: String, unique: true, require: true},
	username: {type: String},
	password: {type: String, require: true},
	isActivated: {type: Boolean, default: false},
	activationLink: {type: String},
})

module.exports = model('User', UserSchema);