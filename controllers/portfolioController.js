// const nodemailer = require('nodemailer');
// const sendGridTransport = require('nodemailer-sendgrid-transport');

// // Transporter config
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   })
// );

// // Controller
// const sendEmailController = async (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     // Validation
//     if (!name || !email || !msg) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide all required fields.',
//       });
//     }

//     // Send email
//     await transporter.sendMail({
//       to: 'viviannguyen726@gmail.com',
//       from: 'viviannguyen726@gmail.com', // Make sure this is an authenticated sender
//       subject: 'New Message from Portfolio Contact Form',
//       html: `
//         <h2>Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${msg}</p>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: 'Your message was sent successfully.',
//     });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({
//       success: false,
//       message: 'Something went wrong while sending the message.',
//       error,
//     });
//   }
// };

// module.exports = { sendEmailController };

const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    const message = {
      to: 'viviannguyen726@gmail.com',
      from: 'viviannguyen726@gmail.com', // must be verified in SendGrid
      subject: 'New Contact from Portfolio',
      html: `
        <h3>Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${msg}</p>
      `,
    };

    await sgMail.send(message);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error.message);
    res.status(500).json({ success: false, message: 'Email failed to send.' });
  }
};

module.exports = { sendEmailController };
