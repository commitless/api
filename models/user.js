const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  joined: Date,
  updated: Date
});

module.exports = mongoose.model('User', userSchema);
