const nodemailer = require("nodemailer");

const sendEmail = (options) => new Promise((resolve, reject) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
				tls: {
						rejectUnauthorized: false
				},
    })
    const mailOptions = {
        from: process.env.EMAIL,
        ...options
    }
    transporter.sendMail(mailOptions, (error, info) => {
        console.log(error, info)
        if (error) {
            console.log(error);
            return reject({ message: "Error sending email", error })
        }
        return resolve({ message: "Email sent successfully" })
    })
})

module.exports = sendEmail;
