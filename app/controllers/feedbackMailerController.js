const { sendMail } = require("../services/feedbackMailerService");

feedbackMailer = async (req, res) => {
    try {
        const { message } = req.body;
        const info = await sendMail(message);
        res.status(200).send(info);
    } catch (error) {
        res.status(404).send({
            status: 'error',
            message: error.message,
            data: {},
          });
    }
}

module.exports = { feedbackMailer };
