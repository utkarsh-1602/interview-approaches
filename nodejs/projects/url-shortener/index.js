const express = require('express');
const app = express();
const PORT = 8000;
const {connectToMongoDB} = require('./db/dbConnection')
const urlRoute = require('./routes/url')

connectToMongoDB('mongodb://127.0.0.1:27017/shorturl')

app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log('Server Started on port: ' + PORT);
})