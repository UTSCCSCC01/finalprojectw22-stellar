const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({username, password});


  
  newUser.save()
    .then(() => res.json('New user saved to database.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/delete').delete((req, res) => {
  User.findByIdAndDelete(req.params)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;