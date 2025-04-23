// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/commentController');

router.get('/', controller.getComments);
router.get('/post/:postId', controller.getCommentsByPostId);
router.post('/', controller.createComment);

module.exports = router;
