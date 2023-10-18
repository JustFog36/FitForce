const express = require('express');
const bodyParser = require('body-parser');
const usersData = require('./usersData.json');

const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user with matching email
  const user = usersData.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Compare the hashed password with the user input
  // bcrypt.compare(password, user.password, (err, result) => {
  //   if (err || !result) {
  //     return res.status(401).json({ error: 'Invalid email or password' });
  //   }

  //   // Return the user data as a response
  //   res.json(user);
  // });

   res.json(user);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});