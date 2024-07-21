const express = require('express');
const { likeVideo, shareVideo, commentVideo } = require('../controllers/videoController');
const router = express.Router();

router.post('/:id/like', likeVideo);
router.post('/:id/share', shareVideo);
router.post('/:id/comment', commentVideo);

module.exports = router;
