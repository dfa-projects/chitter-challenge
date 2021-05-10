require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000

const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(session({
    secret: process.env.SESSIONS_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false }
  }));

app.use(expressLayouts);
app.set('view engine', 'ejs')

const indexController = require('./controllers/index.js');
const peepsController = require('./controllers/peeps.js');
const registerController = require('./controllers/register.js');


app.use('/', indexController);
app.use('/chitter', peepsController);
app.use('/register', registerController);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})