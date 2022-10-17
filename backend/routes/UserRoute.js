/* Here is the explanation for the code above:
1. We import express and the functions we need from the UserController.js file
2. We create a router variable and assign it the value of express.Router() which is a function that returns an object with methods for routing HTTP requests. This object has all the methods that are used to handle HTTP requests.
3. We add the route for the getUser function with the method get and the route parameter id.
4. We add the route for the getAllUsers function with the method get and the route parameter empty.
5. We add the route for the updateUser function with the method put and the route parameter id.
6. We add the route for the deleteUser function with the method delete and the route parameter id.
7. We add the route for the followUser function with the method put and the route parameter id/follow.
8. We add the route for the unfollowUser function with the method put and the route parameter id/unfollow.
9. We export the router. */
import express from "express";
import {
    deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser,
} from "../controllers/UserController.js";
import authMiddleWare from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getAllUsers);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, unfollowUser);

export default router;
