import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String, 
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;