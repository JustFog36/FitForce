require("dotenv").config();

const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });