/* Here is the explanation for the code above:
1. We import mongoose
2. We create a schema for the user
3. We create a model for the user
4. We export the model so we can use it in other files */
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String, required: true,
    },
    password: {
        type: String, required: true,
    },
    firstname: {
        type: String, required: true,
    },
    lastname: {
        type: String, required: true,
    },
    isAdmin: {
        type: Boolean, default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
    followers: [],
    following: [],
}, {timestamps: true});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
