/* Here is the explanation for the code above:
1. Import express and ChatController.js
2. Create a router
3. Create routes for the ChatController.js methods
4. Export the router */

import express from "express";
import {
    createChat, findChat, userChats,
} from "../controllers/ChatController.js";

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);

export default router;
