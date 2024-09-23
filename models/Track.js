const mongoose = require('mongoose');
const TrackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  url: { type: String, required: true },
  artwork: { type: String },
});
module.exports = mongoose.model('Track', TrackSchema);