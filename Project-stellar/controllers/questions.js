const router = require('express').Router();
let Question = require('../models/Question.model');

//Returns the database of our questions
router.route('/').get((req, res) => {
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Allows us to add questions to our database.
router.route('/add').post((req, res) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const category = req.body.category;
  const difficulty = req.body.difficulty;

  const newQuestion = new Question({question, answer, category, difficulty});

  newQuestion.save()
    .then(() => res.json('New question has been saved to database.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Allows us to delete a question from our database using their unique id.
router.route("/delete").delete((req, res) => {
  Question.findByIdAndDelete(req.body._id)
  .then(questions => res.json(questions))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;