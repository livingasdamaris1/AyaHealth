import { BookingModel } from "../models/booking.js";

// Create booking
export const createBooking = async (req, res) => {
  try {
    const { title, start, end, notes } = req.body;
    const userId = req.user.id;

    const newBooking = new BookingModel({
      user: userId,
      title,
      start,
      end,
      notes,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user's bookings
export const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await BookingModel.find({ user: userId });
    res.json(bookings);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Delete booking
export const deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    await BookingModel.findByIdAndDelete(bookingId);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// get booking by id
export const getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await BookingModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  }
  catch (err) {
    res.status(404).json({ error: err.message });
  }
}




// Update booking

export const updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const { title, start, end, notes } = req.body;

    const updatedBooking = await BookingModel.findByIdAndUpdate(
      bookingId,
      { title, start, end, notes },
      { new: true }
    );

    res.json(updatedBooking);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}
// import { BookingModel } from "../models/booking.js";
