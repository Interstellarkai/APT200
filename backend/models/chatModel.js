/* Here is the explanation for the code above:
1. import mongoose from "mongoose"; is a mongoose library which is used to create the schema.
2. const ChatSchema = new mongoose.Schema( is a Schema() function which is used to create a schema. It takes two arguments. First is an object which contains the properties of the schema. Second is an object which contains the timestamps. The timestamps are the time when the schema is created and the time when the schema is updated.
3. const ChatModel = mongoose.model("Chat", ChatSchema); is a model() function which is used to create the model. It takes two arguments. First argument is the name of the model. Second argument is the schema.
4. export default ChatModel; is used to export the model. */
import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    members: {
        type: Array,
    },
}, {
    timestamps: true,
});

const ChatModel = mongoose.model("Chat", ChatSchema);
export default ChatModel;
