const mongoose = require('../db/connection');

module.exports = {
  User: mongoose.model('User', require('./User')),
  Listing: mongoose.model('Listing', require('./Listing')),
  Skill: mongoose.model('Skill', require('./Skill')),
  Booking: mongoose.model('Booking', require('./Booking')),
};
