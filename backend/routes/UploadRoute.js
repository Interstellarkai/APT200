/* Here is the explanation for the code above:
1. We import express and create a router object.
2. We import multer and create a storage object.
3. The storage object has two properties, destination and filename. The destination property defines where the file will be stored. The filename property defines the name of the file. We can use the req.body.name to name the file with the name of the user.
4. We use the multer() method to pass the storage */
import express from "express";

const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = multer({storage: storage});

router.post("/", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

export default router;
