const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ListingSchema = require('./listing');
const SkillSchema = require('./skill');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    formType: Number,
    bio: String,
    listings: [ListingSchema],
    skills: [SkillSchema],
    image: String,
  },
  { timestamps: true }
);

module.exports = UserSchema;
