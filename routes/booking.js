import { Router } from 'express';
import { createBooking, getUserBookings, deleteBooking, updateBooking, getBookingById } from '../controllers/booking.js';
import { isAuthenticated } from '../middlewares/auth.js';


// create a booking router


const bookingRouter = Router();

bookingRouter.post('/bookings/create', createBooking);
bookingRouter.get('/bookings/get', isAuthenticated, getUserBookings);
bookingRouter.get('/bookings/get/:id', isAuthenticated, getBookingById);
bookingRouter.delete('/bookings/delete/:id', deleteBooking);
bookingRouter.patch('/bookings/update/:id', updateBooking);

// export Router
export default bookingRouter;
