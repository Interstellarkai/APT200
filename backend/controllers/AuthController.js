/* Here is the explanation for the code above:
1. We first import the user model, bcrypt and jsonwebtoken.
2. We create a function to register a new user.
3. We create a function to login a user. */
import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

// Register new user
export const registerUser = async (req, res) => {
    // Return status code 400 and error if username or password is missing
    if (!req.body.username || !req.body.password || !req.body.firstname || !req.body.lastname) {
        return res.status(400).send("Username or password is missing");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    const newUser = new UserModel(req.body);
    const {username} = req.body;
    try {
        // addition new
        const oldUser = await UserModel.findOne({username});

        if (oldUser) return res.status(400).json({message: "User already exists"});

        // changed
        const user = await newUser.save();
        // const token = jwt.sign(
        //   { username: user.username, id: user._id },
        //   process.env.JWTKEY,
        //   { expiresIn: "1h" }
        // );
        // res.status(200).json({ user, token });
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Login User

// Changed
export const loginUser = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).send("Username and/or password is missing");
    }

    try {
        const user = await UserModel.findOne({username: username});

        if (user) {
            const validity = await bcrypt.compare(password, user.password);

            if (!validity) {
                res.status(400).json("wrong password");
            } else {
                const token = jwt.sign({username: user.username, id: user._id}, process.env.JWTKEY, {expiresIn: "1h"});
                res.status(200).json({user});
            }
        } else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
