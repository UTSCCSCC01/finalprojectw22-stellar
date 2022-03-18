const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;