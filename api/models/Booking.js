const mongoose = require('../db/connection');

const BookingSchema = new mongoose.Schema(
  {
    date: String,
    skillTime: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = BookingSchema;
