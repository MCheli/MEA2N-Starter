const mongoose = require('mongoose')
const Schema = mongoose.Schema

// ************************ User Schema *************************//
const UserSchema = new Schema({
    email: String
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)