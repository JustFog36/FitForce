const router = require('express').Router();
const Users = require('../models/users');
const path = require('path');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.post('/', (req, res) =>{
    Users.create
})

router.get('/weeklyWorkout', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../Public/weeklyWorkout.html'));
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;