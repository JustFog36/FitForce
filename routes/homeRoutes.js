const router = require('express').Router();
const Users = require('../models/users')

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.post('/', (req, res) =>{
    Users.create
})

module.exports = router;