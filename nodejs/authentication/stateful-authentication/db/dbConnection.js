const mongoose = require('mongoose')

const connectToMongoDB = async(url) => {
    try {
        await mongoose.connect(url);
        if(mongoose.connection.readyState === 1){
            console.log("MongoDB connected");
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {
    connectToMongoDB
};