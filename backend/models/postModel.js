/* Here is the explanation for the code above:
1. The first line imports the mongoose package.
2. The second line creates a schema for the post model. It has the following fields:
    - userId: This is the unique identifier of the user who created the post. It is a string and is required.
    - desc: This is the description of the post. It is a string and is required.
    - likes: This is an array of user ids who have liked the post. It is an array.
    - createdAt: This is the date when the post was created. It is a date and is set to the current date by default.
    - image: This is a string that contains the path to the image of the post. It is optional.
3. The third line creates the Post model using the postSchema and exports it. */

import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {type: String, required: true}, desc: {type: String, required: true}, likes: [], createdAt: {
        type: Date, default: new Date(),
    }, image: String,
}, {
    timestamps: true,
});

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
