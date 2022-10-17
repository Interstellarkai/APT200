/* Here is the explanation for the code above:
1. We import mongoose library.
2. We create a new schema for the collection. The collection will be called messages.
3. The schema will have 3 fields: chatId, senderId, and text.
4. chatId will be a string.
5. senderId will be a string.
6. text will be a string.
7. The schema will also have a timestamp.
8. We create a model called MessageModel using the mongoose.model() function.
9. We export the model. */
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    chatId: {
        type: String,
    }, senderId: {
        type: String,
    }, text: {
        type: String,
    },
}, {
    timestamps: true,
});

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel
