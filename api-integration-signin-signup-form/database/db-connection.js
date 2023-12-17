require('dotenv').config()
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;
console.log("CONNECTION_STRING ==> ", connectionString)

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to the MongoDB database');
});

module.exports = mongoose;
