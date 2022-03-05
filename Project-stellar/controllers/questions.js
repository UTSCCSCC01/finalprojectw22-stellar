const router = require('express').Router();
let Question = require('../models/Question.model');

router.route('/').get((req, res) => {
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const question = req.body.question;
  const answer = req.body.answer;

  const newQuestion = new Question({question, answer});

  newQuestion.save()
    .then(() => res.json('New question has been saved to database.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;