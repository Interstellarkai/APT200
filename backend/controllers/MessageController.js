/* Here is the explanation for the code above:
1. First, we import the MessageModel from the messageModel.js file.
2. Then we define the addMessage function to add a message to the database.
3. We use the MessageModel to create a new message with the chatId, senderId, and text from the request body.
4. We save the message to the database using the save() method.
5. Then we return the result.
6. We do the same thing for the getMessages function.
7. We use the find() method to get all messages from the database.
8. Then we return the result. */
import MessageModel from "../models/messageModel.js";

export const addMessage = async (req, res) => {
    if (!req.body.chatId || !req.body.senderId || !req.body.text) {
        res.status(400).send("Missing chatId, senderId, or text");
    }
    const {chatId, senderId, text} = req.body;
    const message = new MessageModel({
        chatId,
        senderId,
        text,
    });
    try {
        const result = await message.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMessages = async (req, res) => {
    const {chatId} = req.params;
    try {
        const result = await MessageModel.find({chatId});
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error);
    }
};
