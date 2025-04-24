import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import { expressjwt } from "express-jwt";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
})

