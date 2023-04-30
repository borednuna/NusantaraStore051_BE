const nodemailer = require('nodemailer');
const { email, password } = require('../../config/globals');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

const createMailOptions = (message) => {
    return {
        from: email,
        to: email,
        subject: 'Feedback from user',
        text: message
    };
}

module.exports = {
    transporter,
    createMailOptions
}
