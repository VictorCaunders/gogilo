const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  status: { type: String, default: 'pending' }, // 'pending', 'confirmed', 'completed'
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
