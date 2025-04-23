const express = require('express');
const router = express.Router();
const tiktokController = require('../controllers/tiktokController');

router.get('/user/:username', tiktokController.getUserInfo);
router.get('/user/:username/posts', tiktokController.getUserPosts);
router.get('/post/info', tiktokController.getPostInfo);
router.get('/post/:aweme_id/comments', tiktokController.getPostComments);
router.get('/hashtag/:name/posts', tiktokController.getHashtagPosts);

module.exports = router;
