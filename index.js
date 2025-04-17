import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";
import bookingRouter from "./routes/booking.js";


await mongoose.connect(process.env.MONGO_URI);
console.log("Database connected successfully!");
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,   


const app = express()
app.use (express.json())
app.use(cors())

app.use(userRoutes)
app.use(bookingRouter);

;




const port = process.env.PORT || 10000
app.listen (port, () => {
  console.log (`Server is listening on port ${port}`)
})
