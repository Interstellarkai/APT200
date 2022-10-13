const User = require('../models/user')
const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
	// verify auth
	const {authorization} = req.headers
	if(!authorization) {
		return res.status(401).json({Error: "Authorisation Token Required."})
	}
	const token = authorization.split(' ')[1]
	try{
		const {_id} = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
		req.user = await User.findOne({_id}).select('_id')
		next()		
	}catch(error){
		console.log(error)
		res.status(401).json({Error: "Request not authorised."})
	}
}
module.exports = {
	auth
}