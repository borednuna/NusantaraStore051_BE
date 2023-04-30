const { transporter, createMailOptions } = require('../repositories/feedbackMailerRepository');

const sendMail = async (message) => {
    try {
        const mailOptions = createMailOptions(message);
        const info = transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return info;
    } catch (error) {
        return error;
    }
}

module.exports = { sendMail }
