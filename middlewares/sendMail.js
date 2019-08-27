const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

sgMail.setApiKey(keys.sgmail);

function updateInfoEmail(email, name){
    const firstName = name.charAt(0).toUpperCase() + name.substring(1);
    const msg = {
        to: email,
        from: 'randomeruser@hoxoh.com',
        subject: 'Account Updated',
        // message: `Hi ${name}, \]nIt's easy to do anywhere, even with Node.js`
        html: `<strong>Hi ${firstName}, \nYour account information has been updated!</strong>`
    };
    sgMail.send(msg);
}

module.exports = {
    updateInfoEmail
};