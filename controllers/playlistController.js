const Playlist = require('../models/Playlist');

const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user.id }).populate('tracks');
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const createPlaylist = async (req, res) => {
  const { name, trackIds } = req.body


}

const editPlaylist = async (req, res) => {

}

module.exports = { getPlaylists, createPlaylist, editPlaylist };