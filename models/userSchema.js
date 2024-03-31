const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {type: String, required:true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    gender: {type: String},
    avatar: {type: String},
    domain: {type: String},
    available: {type: Boolean}
})

const User = mongoose.model('User', userSchema);
module.exports = User;
