const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/interviewApproaches')
.then(() => {
    console.log("MongoDB Connected!");
})
.catch((err) => {
    console.log("Error connecting to MongoDB: ", err)
})

module.exports = mongoose;