const express = require('express');
const { likeArticle, shareArticle, commentArticle } = require('../controllers/articleController');
const router = express.Router();

router.post('/:id/like', likeArticle);
router.post('/:id/share', shareArticle);
router.post('/:id/comment', commentArticle);

module.exports = router;
