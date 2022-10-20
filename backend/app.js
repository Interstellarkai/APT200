/* Here is the explanation for the code above:
1. Importing libraries and files.
2. Creating express app.
3. Middleware to parse json data.
4. Middleware to parse urlencoded data.
5. Middleware to allow CORS.
6. Middleware to serve images inside public folder.
7. Middleware to serve documentation.
8. Middleware to parse .env file.
9. Creating PORT variable.
10. Creating CONNECTION variable.
11. Connecting to MongoDB using mongoose.
12. Listening to the PORT.
13. Catching errors.
14. Using the routes. */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// routes
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import UploadRoute from "./routes/UploadRoute.js";
import ChatRoute from "./routes/ChatRoute.js";
import MessageRoute from "./routes/MessageRoute.js";
import ImageRouter from "./routes/images.js";

// documentation
// import swaggerUi from "swagger-ui-express";
// import swaggerFile from "./swagger_output.json" assert {type: "json"};

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));
// documentation
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

dotenv.config();
const PORT = process.env.PORT;

const CONNECTION = process.env.MONGODB_CONNECTION;
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.info("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/posts", PostRoute);
app.use("/upload", UploadRoute);
app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);
app.use("/image", ImageRouter);

export default app;
