const User = require('../../models/user/user.model');

const update = async (payload) => {
    try {

        const document = await User.findOne({
            email: payload.email
        });
        if (document.password == payload.oldPassword) {
            const newDocument = await User.findOneAndUpdate({
                email: payload.email
            }, {
                password: payload.newPassword
            });

            return !!newDocument;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

module.exports = update;