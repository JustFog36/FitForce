const express = require('express');
const router = express.Router();
const User = require('./models/users.js');

// Define the /api/users endpoint
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Validate the username and password
  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide a username and password.' });
  }

  // Check if the username already exists in the database
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists.' });
  }

  // Create a new user account in the database
  try {
    const newUser = await User.create({ username, password });
    return res.status(201).json({ message: 'Account created successfully.', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;