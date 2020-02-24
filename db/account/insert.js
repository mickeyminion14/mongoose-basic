const User = require('../../models/user/user.model');

const insert = (payload) => {
    const user = new User(payload);
    return user.save();

}

module.exports = insert;