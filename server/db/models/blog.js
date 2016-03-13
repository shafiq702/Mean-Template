var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  title: {type: String, required: true},
  contents: {type: String, required: true},
  state: {type: String},
  author: {type: String},
  date: { type: Date, default: Date.now }
})

mongoose.model('Blog', schema);
