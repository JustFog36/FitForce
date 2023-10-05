
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./models'); 

const app = express();

// setting handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
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

// Sync Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
