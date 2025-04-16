import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";


const database = await mongoose.connect (process.env.MONGO_URI);


const app = express()
app.use (express.json())
app.use(cors())

app.use(userRoutes)
;




const port = process.env.PORT || 4040
app.listen (port, () => {
  console.log (`Server is listening on port ${port}`)
})
