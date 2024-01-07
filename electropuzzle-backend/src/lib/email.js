const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

async function sendEmail(emailer, receivers, subject, html) {
  const to = receivers.join(', ');
  const info = await emailer.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`, // from name and address
    to: to,
    subject: subject, 
    html: html,
  });
  console.log(info);
}

module.exports = {
  transporter,
  sendEmail,
};