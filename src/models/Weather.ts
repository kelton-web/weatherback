import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  city: String,
  forecast: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;
