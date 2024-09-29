const express = require('express');
const router = express.Router();
const { getPlaylists, addPlaylist, editPlaylist } = require('../controllers/playlistController')
const authMiddleware = require('../middleware/authMiddleware');

router.get('/playlists', authMiddleware, getPlaylists);
router.post('/playlist/add', authMiddleware, addPlaylist);
router.post('/playlist/edit', authMiddleware, editPlaylist);

module.exports = router;