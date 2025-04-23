const express = require('express');
const router = express.Router();
const controller = require('../controllers/videoController');

router.get('/', controller.getVideos);
router.get('/:id', controller.getVideoById);
router.post('/', controller.createVideo);
router.delete('/:id', controller.deleteVideo);

module.exports = router;
