require("dotenv").config();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const usersRouter = require('./validate');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

// setting handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set up veiws
app.set('views', path.join(__dirname, 'views'));

// connect to CSS, JavaScript from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// middleware to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define your routes here
app.get('/', (req, res) => {
  res.render('home', { title: 'My App' });
});

// Mount the /api/users routes onto the main app object
app.use('/api/users', usersRouter);

// Sync Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
