const express = require('express');
const signupCtrl = require("../../controllers/account/signup/signupCtrl")
const loginCtrl = require("../../controllers/account/login/loginCtrl")
const account = express();
const changePasswordCtrl = require('../../controllers/account/change-password/change-passwordCtrl')




account.post("/signup", signupCtrl);

account.post("/login", loginCtrl);

account.post("/change-password", changePasswordCtrl)

module.exports = account;