const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: String,
  user: String,
  html: String,
  js: String,
  css: String,
  editable: Boolean,
  created: Date,
  updated: Date
});

module.exports = mongoose.model('Project', projectSchema);
