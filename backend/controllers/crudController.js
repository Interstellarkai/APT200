const bcrypt = require("bcrypt")
const User = require("../models/user")
//ensure id type
const mongoose = require("mongoose")

//start of user

// get all users
const getAllUsers = async (request, response) => {
	const users = await User.find({}).populate("products");
	response.status(200).json(users);
}

// get single user by id
const getUser = async (request, response) => {
	const {id} = request.params
	
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	const user = await User.findById(id)
	
	if (!user) {
		return response.status(404).json({error: "Id not found"})
	}else{
		response.status(200).json(user)
	}	
}

// delete by id
const deleteUser = async (request, response) => {
	const {id} = request.params
	
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	const user = await User.findOneAndDelete({_id: id})
	if (!user) {
		return response.status(404).json({error: "Id not found"})
	}else{
		response.status(200).json(user)
	}
	
}

// login

// create new user
const createUser = async (request, response) => {
	const { username, name, password } = request.body;

	const existingUser = await User.findOne({ username });
	if (existingUser) {
		return response.status(400).json({
			error: "username must be unique",
		});
	}
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	const user = new User({
		username,
		name,
		passwordHash,
	});

	const savedUser = await user.save();

	response.status(201).json(savedUser);
	
}

//
const updateUser = async (request, response) => {
	const {id} = request.params
	
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	/*
	const user = await User.findOneAndUpdate({_id: id}, {
	...request.body
	})
	*/
	
	/*
	IMPT: ONLY UPDATES EITHER NAME OR PASSWORD.
	*/
	const { name, password } = request.body;
	if (name) {
		User.findByIdAndUpdate(request.params.id, { name: name }, { new: true })
			.then((updatedUser) => {
				return response.json(updatedUser);
			})
			.catch((error) => next(error));
	} else {
		const saltRounds = 10;
		const passwordHash = await bcrypt.hash(password, saltRounds);
		User.findByIdAndUpdate(
			request.params.id,
			{ passwordHash: passwordHash },
			{ new: true }
		)
			.then((updatedUser) => {
				return response.json(updatedUser);
			})
			.catch((error) => next(error));
	}
	/*
	if (!user) {
		return response.status(404).json({error: "Id not found"})
	}else{
		response.status(200).json(user)
	}
	*/
}

// end of user


//start of products
const Product = require('../models/product')
const Image = require('../models/image')

//get all products
const getAllProducts = async (request, response) => {
	const products = await Product.find({}).populate('user', { username:1, name:1})
	response.status(200).json(products)
}

//get single product by Id
const getProduct = async (request, response) => {
	const {id} = request.params
	
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	const product = await Product.findById(id)
	
	if (!product) {
		return response.status(404).json({error: "Id not found"})
	}else{
		response.status(200).json(product)
	}
}

//create new product
const createProduct = async (request, response, next) => {
	const {name, price, userId, img} = request.body
	if(!mongoose.Types.ObjectId.isValid(userId)) {
		return response.status(404).json({error: "No such Id"})
	}
	const user = await User.findById(userId)
	if(!user){
		return response.status(404).json({error: "Id not found"})
	}
	const product = new Product({
		name,
		price,
		date: new Date(),
		rating: 0,
		user: user._id
	})
	
	const savedProduct = await product.save()
	user.products = user.products.concat(savedProduct._id)
	await user.save()
	
	response.status(200).jason(savedProduct)
}

//delete product by id
const deleteProduct = async (request, response, next) => {
	const {id} = request.params
	
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	const product = await product.findOneAndDelete({_id: id})
	if (!product) {
		return response.status(404).json({error: "Id not found"})
	}else{
		response.status(200).json(product)
	}
}

//update product
const updateProduct = async (request, response, next) => {
	const {id} = request.params
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	const {name, price} = request.body
	const product = {name,price}
	Product.findByIdAndUpdate(id, product, {new: true}).then(updatedProduct => {
		response.status(200).json(updatedProduct)
	})
	.catch(error => next(error))
}

//end of products


//start of images
const Image = require('../models/image')
/*
const fs = require('fs')
const multer = require('multer')
const Storage = multer.diskStorage({
		destination:(req,file,cb)=>{
			cb(null, 'uploads')
		},
		filename:(req,file,cb)=>{
			cb(null, file.originalname)
		}
})
const upload = multer({storage:Storage})
*/

//get all images
const getAllImages = async (request, response) => {
	const allImages = await Image.Find()
	response.status(200).json(allImages)
}

//get image by id
const getImage = async (request, response) => {
	const {id} = request.params
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	const img = await Image.findById(id)
	if (img){
		response.status(200).json(img)
	} else {
		response.status(404).json({error:"Not found"})
	}
}

//create image

//delete image
const deleteImage = async (request, response, next) => {
	const {id} = request.params
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({error: "No such Id"})
	}
	
	await Image.findByIdAndRemove(id)
	response.status(200).end()	
}
//end of images


//start of messages
const Message = require('../models/message')

//get all messages
const getAllMessages = async(request, response) => {
	const messages = await Message.find({}).populate("sendId").populate("recId")
	response.json(messages)
}

//create message
const createMessage = async(request, response, next) => {
	const {sendId, recId, text} = request.body

	const sender = await User.findById(sendId)
	if(sender == null){
		return response.status(404).json({
			error: "sender Id does not exist",
		});
	}
	const receiver = await User.findById(recId)
	if(receiver == null){
		return response.status(404).json({
			error: "receiver Id does not exist",
		});
	}
	
	const message = new Message({
		sendId,
		recId,
		//time: new Date(), should be auto.
		text
	})
	
	const savedMessage = await message.save()
	response.send('sent')
}

//end of messages




module.exports = {
	getAllUsers,
	getUser,
	createUser,
	deleteUser,
	updateUser,
	
	getAllProducts,
	getProduct,
	createProduct,
	deleteProduct,
	updateProduct,
	
	getAllImages,
	getImage,
	deleteImage,
	
	getAllMessages,
	createMessage,
	
	
}




