import { UserModel } from "../models/users.js";
import { newUserValidator, loginValidator } from "../validators/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register a new user
export const registerUser = async (req, res, next) => {
    // validate user information
    const { error, value } = newUserValidator.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(422).json(error)
    }
    // check if user already exists
    const user = await UserModel.findOne({
        $or: [
            { username: value.username },
            { email: value.email }
        ]

    });
    if (user) {
        return res.status(409).json({ message: "User already exists!" });
    }
    // Hash their password
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    // Save user into database
    await UserModel.create({
        ...value,
        password: hashedPassword
    });
    // Send user confirmation email
    // Respond to request
    res.json('User registered!')
};

// login user
export const userLogin = async (req, res, next) => {
    // validate user information
    const { error, value } = loginValidator.validate(req.body);
    if (error) {
        return res.status(422).json(error);
    }
    // find matching user in database
    const user = await UserModel.findOne({
        $or: [
            { username: value.username },
            { email: value.email }
        ]
    });
    if (!user) {
        return res.status(404).json({ message: "User not found!" });
    }
    // compare password
    const isPasswordValid = bcrypt.compareSync(value.password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password!" });
    }
    // generate access token
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' });

    // return response
    res.status(200).json({ token });
}