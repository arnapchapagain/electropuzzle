const express = require('express');
const dotenv = require('dotenv');
const { transporter, sendEmail } = require('./lib/email');

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

transporter.verify((error, success) => {
    if (error) {
      throw error;
    } else {
      console.log("Server is ready to send messages");
    }
  });

app.get('/', async (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});
