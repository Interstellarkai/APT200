/* Here is the explanation for the code above:
1. The first function is to create a chat, it takes the senderId and receiverId from the request body and push them to the members array in the chat model, then save the new chat to the database and return it to the user.
2. The second function is to get all the chats for a specific user, it takes the user's id from the request parameters and finds all the chats that have the user's id in the members array and return them to the user.
3. The last function is to find a chat, it takes two user's ids from the request parameters and finds a chat that has both of the user's ids in the members array and returns it to the user. */
import ChatModel from "../models/chatModel.js";

export const createChat = async (req, res) => {
    if (!req.body.senderId || !req.body.receiverId) {
        return res.status(400).json({message: "Missing senderId or receiverId"})
    }
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const userChats = async (req, res) => {
    try {
        const chat = await ChatModel.find({
            members: {$in: [req.params.userId]},
        });
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const findChat = async (req, res) => {
    try {
        const chat = await ChatModel.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]},
        });
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error);
    }
};
