const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // 'doctor' or 'patient'
});

module.exports = mongoose.model('User', UserSchema);
