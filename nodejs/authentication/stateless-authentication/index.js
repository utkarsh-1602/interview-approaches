const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser')

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

const PORT = 8000;
const {connectToMongoDB} = require('./db/dbConnection')
const userRoute = require('./routes/user')
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter')
const {restrictToLoggedInUserOnly, checkAuth} = require('./middleware/auth')

connectToMongoDB('mongodb://127.0.0.1:27017/shorturl')
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false})); // to parse the form data present in home.ejs
app.use(cookieParser())

app.use('/user', userRoute)
app.use('/url', restrictToLoggedInUserOnly, urlRoute);
app.use('/', checkAuth, staticRoute)

app.listen(PORT, () => {
    console.log('Server Started on port: ' + PORT);
})