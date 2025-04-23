// routes/hashtagRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/hashtagController');

router.get('/', controller.getHashtags);
router.post('/', controller.createHashtag);
router.put('/increment/:name', controller.incrementHashtagUsage);

module.exports = router;
