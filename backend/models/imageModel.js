import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
});

imageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }, //transforms id to string and removes _v value, idk if you need the _v value
});

const ImageModel = mongoose.model("Image", imageSchema);
export default ImageModel;
