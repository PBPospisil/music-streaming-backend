const express = require('express');
const router = express.Router();
const { getPlaylists, createPlaylist, editPlaylist } = require('../controllers/playlistController')
const authMiddleware = require('../middleware/authMiddleware');

router.get('/playlists', authMiddleware, getPlaylists);
router.post('/playlist/create', authMiddleware, createPlaylist);
router.post('/playlist/edit', authMiddleware, editPlaylist);

module.exports = router;