const express = require('express'); // 1. Import Express
const nodemailer = require('nodemailer'); // 2. Import Nodemailer
const cors = require('cors'); // 3. Import CORS
require('dotenv').config(); // 4. Load your .env file

const app = express(); // 5. Initialize 'app' (This fixes your error!)

// 6. Middleware
app.use(cors()); // Allows your React app to connect
app.use(express.json()); // Allows the server to read JSON data from React

// 7. Your Route (The code you already had)
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
// Add this simple GET route
app.get('/', (req, res) => {
  res.send('Server is running and ready to send emails!');
});
// 8. Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});