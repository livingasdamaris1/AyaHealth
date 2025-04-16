import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";



const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'therapist'], default: 'user' }
}, { timestamps: true });

userSchema.plugin(normalize)

export const UserModel = model('User', userSchema)
// This code defines a Mongoose schema for a User model, which includes fields for name, email, password, and role. The email field is unique, and the role can either be 'user' or 'admin'. The schema also includes timestamps for created and updated times. Finally, it exports the User model for use in other parts of the application.