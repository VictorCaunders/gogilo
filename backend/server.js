const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./models/user');
const Appointment = require('./models/appointment');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/bmed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid credentials.' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
