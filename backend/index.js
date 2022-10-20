import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();
const PORT = process.env.PORT;
console.log("hello")

app.listen(PORT, () => console.log(`Listening at Port ${PORT}`))