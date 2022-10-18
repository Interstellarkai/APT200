/* Here is the explanation for the code above:
1. We create a new router and assign it to the router variable.
2. We define a post route for the router. The route is /messages and the callback is addMessage.
3. We define a get route for the router. The route is /messages/:chatId and the callback is getMessages.
4. We export the router, so we can use it in our app.js file. */
import express from "express";
import {addMessage, getMessages} from "../controllers/MessageController.js";

const router = express.Router();

router.post("/", addMessage);

router.get("/:chatId", getMessages);

export default router;
