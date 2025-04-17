import { Router } from 'express';
import { createBooking, getBookings, deleteBooking, updateBooking } from '../controllers/booking.js';
import authMiddleware from '../middlewares/auth.js';


// create a booking router


const bookingRouter = Router();

bookingRouter.post('/bookings/create', createBooking);
bookingRouter.get('/bookings/get', getBookings);
bookingRouter.delete('/bookings/delete/:id', deleteBooking);
bookingRouter.patch('/bookings/update/:id', updateBooking);

// export Router
export default bookingRouter;
