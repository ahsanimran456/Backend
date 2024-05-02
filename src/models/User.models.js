import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const { Schema } = mongoose;


const userSchema = new Schema({ timestamps: true }, {
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
        required: [true, "Avatar is required"]
    },
    refreshToken: {
        type: String
    }

})

// this function is used to hash the password before saving it to the database.
userSchema.pre('save', async function (next) {
    // this.isModified('password') this line is checking for if the password field has been modified before saving the document.
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.createAccessToken = async function () {
    jwt.sign({ _id: this._id, email: this.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }, (err, token) => {
        return token
    })
}

// in the refres token we use short key like id not use whole data 
userSchema.methods.createRefreshToken = async function () {
    jwt.sign({ _id: this._id, }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }, (err, token) => {
        return token
    })

}

export const UserModel = mongoose.model('User', userSchema)