import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    avatar: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }

})

export const UserModel = mongoose.model('User', userSchema)