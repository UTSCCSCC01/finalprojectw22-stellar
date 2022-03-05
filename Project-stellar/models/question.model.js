const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  answer: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;