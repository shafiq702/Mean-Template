var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: {type: String, required: true},
  contents: {type: String, required: true},
  state: {type: String},
  author: {type: String},
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Blog', blogSchema);
