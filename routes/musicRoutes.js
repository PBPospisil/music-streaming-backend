const express = require('express');
const router = express.Router();
const { getTracks } = require('../controllers/musicController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/tracks', authMiddleware, getTracks);

module.exports = router;