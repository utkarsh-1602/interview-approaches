const mongoose = require('mongoose')

// schema: used to define the structure
const userSchema = mongoose.Schema({
    first_name: {
        type: String, 
        required: true
    },
    last_name: {
        type: String, 
    },
    email: {
        type: String, 
        required: true
    },
    gender: {
        type: String, 
    },
    job_title: {
        type: String, 
        required: true
    },
    age: {
        type: Number, 
    }
}, 
{timestamps: true}
)

// model
const User = mongoose.model('user', userSchema)
module.exports = User;