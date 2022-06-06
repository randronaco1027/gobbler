const path = require('path');
const express = require('express');

const exphbs = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname,'view/partials'),
    defaultLayout: 'layout',
    extname: 'hbs'
});

const app = express()
const PORT = process.env.PORT || 3001

const sequelize = require('./config/connection')

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'views'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
});