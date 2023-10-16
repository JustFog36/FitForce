const express = require('express');
require("dotenv").config();
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

// setting handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect to CSS, JavaScript from the "public" directory
app.use(express.static(path.join(__dirname, 'Public')));

app.use(routes);



// Sync Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
