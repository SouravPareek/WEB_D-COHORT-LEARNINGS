const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"]
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique:[true, "email should be unique"]
    },
    password:{
        type: String,
        required: [true, "password is required"],
        select: false //whenever we will try to read user data then this field will not be read, but if we need password anywhere then we can use => .select("+password")
    }
})


const userModel = mongoose.model("users", userSchema)

module.exports = userModel