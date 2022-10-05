const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");
const {auth} = require("../utils/requireAuth")

const {
	createUser,
	getUser,
	getAllUsers,
	deleteUser,
	updateName,
	updatePass,
	login,
	
} = require("../controllers/crudController")

//for auth
/*
const jwt = require('jsonwebtoken')
require('dotenv').config()
*/
usersRouter.get("/", auth, getAllUsers)
/*
usersRouter.get("/", async (request, response) => {
	const users = await User.find({}).populate("products");
	response.json(users);
});
*/

usersRouter.get("/:id", auth, getUser)

/* usersRouter.get("/:id", auth, async (request, response) => {
	const user = await User.findById(request.params.id);
	if (user) {
		response.json(user);
	} else {
		response.status(404).end();
	}
});
 */

usersRouter.post("/", createUser)
/*
usersRouter.post("/", async (request, response) => {	

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

});
*/

usersRouter.delete("/:id", auth, deleteUser)
/*
usersRouter.delete("/:id", async (request, response, next) => {
	await User.findByIdAndRemove(request.params.id);
	response.status(204).end();
});
*/

usersRouter.put("/name/:id", auth, updateName)
/*
usersRouter.put("/:id", async (request, response, next) => {
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
});
*/
usersRouter.put("/pass/:id", auth, updatePass)

//for auth.
//batmens12345
//qwerty

usersRouter.post("/login", login)
/*
usersRouter.post("/login", async (req, res, next) => {
	
	//const username = req.body.username
	//const user = {name: username}
	//const accessToken = jwt.sign(user, //process.env.ACCESS_TOKEN_SECRET)
	//res.json({accessToken: accessToken})
	
	const username = req.body.username
	const password = req.body.password
	console.log(req.body)
	const user = await User.findOne({'username': username})
	if (user==null){
		return res.status(400).send("Username does not exist")		
	}
	try{
		if(await bcrypt.compare(password, user.passwordHash)){
			//res.send('Success')
			console.log("Success");
			const user = {name: username}
			const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
			res.json({accessToken: accessToken})
			//res.json(user);
		} else {
			res.send('Password does not match.')
		}
	} catch{
		res.status(500).send()
	}
});
*/

//userRouter.get("/getUserProds", getUserProds)

/*
usersRouter.get("/products", authenticateToken, (req,res) => {
	
})
*/
/*
function authenticateToken(req, res, next){
	const authHeader = req.headers['authorisation']
	//2nd param
	const token = authHeader && authHeader.split(' ')[1]
	if(token == null) return res.sendStatus(401)
	//no token sent

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
		if (err) return res.sendStatus(403)
		//token not valid
		
		req.user = user
		next()
		
	})
}
*/
module.exports = usersRouter;
