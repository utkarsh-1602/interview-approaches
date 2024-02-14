require('dotenv').config()
const express = require('express')
const cors = require('cors')

// routes
const student = require('./routes/studentRoute')

const app = express()
const port = process.env.PORT || 8000;

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors())

// Mounting the routes
app.use('/', student)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});