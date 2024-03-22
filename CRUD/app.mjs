import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./DB/connectDB.mjs";
import { join } from "path";
import router from "./routes/web.mjs";

const app = express();
dotenv.config();

// View template engine setup
app.set("view engine", "ejs");
app.set("views",join(process.cwd(),"CRUD/views"));


// Built-in static file
app.use("/student", express.static(join(process.cwd(), "CRUD", "public")));



// URL encoded
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Router Loaded!
// Router for general CRUD operations
app.use("/student", router);

// Router for editing data
app.use("/student/edit", router);

// Router for updating data
app.use("/student/update",router);




// DB Connection!
connectDB(String(process.env.MONGO_URI));

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
