const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Listing } = require('./index');
const { Skill } = require('./Skill.js');

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
    type: Number,
    bio: String,
    listings: [Listing],
    skills: [Skill],
    image: String,
  },
  { timestamps: true }
);

module.exports = UserSchema;
