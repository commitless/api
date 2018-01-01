const mongoose = require('mongoose');

const alloSchema = mongoose.Schema({
  fromUser: String,
  toUser: String,
  project: String,
  areas: [{
    file: String,
    startLine: Number,
    endLine: Number
  }],
  created: Date,
  updated: Date
});

module.exports = mongoose.model('Allotment', alloSchema);
