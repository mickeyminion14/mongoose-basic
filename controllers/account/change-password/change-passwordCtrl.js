const update = require('../../../db/account/update');
const changePasswordCtrl =  (req, res) => {
    const payload = {...req.body};
    const result =  update(payload);

    if (result) {
        res.send("password changes succesfully!!"); 
    }
    else {
        res.send("could not change password !!"); 

    }

   
    
}

module.exports = changePasswordCtrl;