/* Here is the explanation for the code above:
1. We created a new route for posts.
2. We import the express module from node_modules.
3. We import the required functions from the PostController.js file.
4. We import the auth middleware to check the authentication of the user.
5. We create a new router.
6. We create the routes for the posts.
7. We export the router. */
import express from "express";
import {
    createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost,
} from "../controllers/PostController.js";
import authMiddleWare from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);

export default router;
