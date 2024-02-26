const express = require('express');
const {handleGenerateShortUrl, handleRedirectUrl, handleGetAnalytics} =  require('../controllers/url')

const router = express.Router();

router.post('/', handleGenerateShortUrl);
router.get('/:shortId', handleRedirectUrl);
router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router;