const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
}, {
    collection: "account",
    timestamps: true

});


const User = mongoose.model('User', UserModel);

module.exports = User;
