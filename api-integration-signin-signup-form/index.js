require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./database/db-connection')

// routes
const userRoutes = require('./routes/userRoutes')

const app = express()
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors())


// Mounting the routes
app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


