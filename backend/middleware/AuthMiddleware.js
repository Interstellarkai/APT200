/* Here is the explanation for the code above:
1. We are importing the jwt package to help us decode the token we are getting from the front end.
2. We also import the dotenv package to help us get the value of the JWTKEY from our .env file.
3. We set the JWTKEY value as the secret variable.
4. We create a function called authMiddleWare which is a middleware function that takes in three parameters (req, res, next) where req is the request object, res is the response object and next is a function we call when we are ready to continue with the execution of the route handler. We will be using this to pass the decoded user id to the route handler.
5. Inside the function, we first get the token from the headers of the request object. We get the token from the authorization property of the headers object. The authorization property is the property that holds the token we are sending from the front end. The token is usually in the form of "Bearer tokenHere" so we split the string at the space and get the token which is the second item in the array.
6. We then use the jwt.verify method to decode the token and get the user id. We set the user id to the id property of the req.body object.
7. We then call the next function to continue with the execution of the route handler.
8. We then export the authMiddleWare function so we can use it in our routes. */
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTKEY;
const authMiddleWare = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		console.log(token);
		if (token) {
			const decoded = jwt.verify(token, secret);
			console.log(decoded);
			req.body._id = decoded?.id;
		}
		next();
	} catch (error) {
		console.log(error);
	}
};

export default authMiddleWare;
