const mongoose = require('mongoose');
const validator = require('validator');
const UserModel = new mongoose.Schema({
    name: {
      type : String,
      minlength : 3,
      maxlength : 25,
      trim : true,
      required : true
    },
    age: {
      type: Number,
      trim : true,
      default : 0
    },
    email:{
      type : String,
      required : true,
      unique : true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid !");
        }
      }
    },
    password: {
      type : String,
      required : true,
      trim : true,
      minlength: 8,
      maxlength: 15
    }
}, {
    collection: "account",
    timestamps: true

});


const User = mongoose.model('User', UserModel);

module.exports = User;
