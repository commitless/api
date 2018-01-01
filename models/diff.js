const mongoose = require('mongoose');

const diffSchema = mongoose.Schema({
  fromUser: String,
  toUser: String,
  fromProject: String,
  toProject: String,
  comments: [String],
  accepted: Boolean,
  reviewed: Boolean,
  reviews: [String],
  created: Date,
  updated: Date
});

module.exports = mongoose.model('Diff', diffSchema);
