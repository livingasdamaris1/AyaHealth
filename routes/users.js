import { Router } from "express";
import { registerUser, userLogin } from "../controllers/users.js";


// create a user router
 const usersRouter = Router();

// define routes
usersRouter.post('/users/register', registerUser);
usersRouter.post('/users/login', userLogin);

// export Router
export default usersRouter;