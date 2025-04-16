// import jwt from 'jsonwebtoken';
import { expressjwt } from "express-jwt";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
    })


// export const isAuthenticated = (req, res, next) => {
//     // get the authorization header
//     const authorization = req.headers.authorization;
//     // check if the authorization header is present
//     if (!authorization) {
//         return res.status(401).json({ message: 'Authorization header is not present!' });
//     }
//     // get access token from authorization
//     const token = authorization.split(' ')[1];
//     // check if token is exist
//     if (!token) {
//         return res.status(401).json({ message: 'Access Token is not present!' });
//     }
//     // verify and decode the token
//     const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET_KEY,
//         (error, decoded) => {
//             // Handle verify error
//             if (error) {
//                 return res.status(401).json(error);
//             }
                    
//       // Add decoded to request object
//       req.user = decoded;
//       // proceed to the next handler
//        next();
//     }
//     );
// }
//     // return response
//     res.status(200).json({ message: 'User is authenticated!', user: req.user });