const nodemailer = require('nodemailer');
const { email, password } = require('../../config/globals');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

const getMailOptions = (recipient, product) => {
    return {
        from: email,
        to: recipient,
        subject: 'Purchase Confirmation',
        text: 'Your payment for product' + product + 'is successful. Thank you for your purchase!',
    };
}

module.exports = { transporter, getMailOptions }
