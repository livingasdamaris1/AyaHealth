import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
}, { timestamps: true });

bookingSchema.plugin(normalize);

export const BookingModel = model('Booking', bookingSchema);
