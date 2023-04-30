const { sendPurchaseConfirmation } = require('../services/purchaseMailerService');

const purchase = async (req, res) => {
    try {
        const { recipient, product } = req.body;
        await sendPurchaseConfirmation(recipient, product);
        res.status(200).json({ message: 'Purchase confirmation sent' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { purchase }
