const { transporter, getMailOptions } = require('../repositories/purchaseMailerRepository');

const sendPurchaseConfirmation = async (recipient, product) => {
    try {
        const mailOptions = getMailOptions(recipient, product);
        await transporter.sendMail(mailOptions);
    }
    catch (error) {
        return error;
    }
}

module.exports = { sendPurchaseConfirmation }
