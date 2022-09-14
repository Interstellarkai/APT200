const mongoose = require('mongoose')

const msgSchema = new mongoose.Schema({
	sendId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	recId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	time:{
		type : Date, default: Date.now
	},
	text:{
		type: String,
		required:true
	}	

});

/*
msgSchema.set('toJSON', {
	transform:(document, returnedObject) => {
		returnObject.id = returnObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})
*/

module.exports = mongoose.model("Message", msgSchema)
