const Track = require('../models/Track');

const getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getTracks };