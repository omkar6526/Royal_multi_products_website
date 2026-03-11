const express = require('express');
const nodemailer = require('nodemailer'); 
const cors = require('cors');
require('dotenv').config(); 

const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.post('/api/inquiry', async (req, res) => {
  const { fullName, email, phone, productName, quantity, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${fullName}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Product Inquiry: ${productName}`,
    html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Customer:</strong> ${fullName}</p>
      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running and ready to send emails!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});