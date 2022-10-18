/* Here is the explanation for the code above:
1. We import express from express library.
2. We import loginUser function and registerUser function from AuthController.
3. We create a router variable and assign it to express.router() method.
4. We create a route for the register endpoint.
5. We create a route for the login endpoint.
6. We export the router variable. */
import express from "express";
import {loginUser, registerUser} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
