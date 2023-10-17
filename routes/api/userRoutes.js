const router = require('express').Router();
const path = require('path');
const User = require('../../models/users');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('main');
});

router.post('/', (req, res) =>{
  User.create(req.body)
    .then((newUser) => {
      res.json(newUser)
    })
    .catch((err) => {
      res.json(err)
    })
})

module.exports = router;







// Define the /api/users endpoint
// router.post('/', async (req, res) => {
//   const { email, password } = req.body;

//   // Validate the username and password
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide an email and password.' });
//   }

//   // Check if the email already exists in the database
//   const existingUser = await User.findOne({ where: { email } });
//   if (existingUser) {
//     return res.status(409).json({ message: 'Email already exists.' });
//   }

//   // Create a new user account in the database
//   try {
//     const newUser = await User.create({ username, password });
//     return res.status(201).json({ message: 'Account created successfully.', user: newUser });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error.' });
//   }
// });