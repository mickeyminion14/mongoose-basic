const express = require('express');
const signupCtrl = require("../../controllers/account/signup/signupCtrl") 
const loginCtrl = require("../../controllers/account/login/loginCtrl") 

const account = express();


account.post("/signup", signupCtrl);

account.get("/login",loginCtrl);



module.exports = account;