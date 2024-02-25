const express = require('express');
const {handleGenerateShortUrl, handleRedirectUrl} =  require('../controllers/url')

const router = express.Router();

router.post('/', handleGenerateShortUrl);
router.get('/:shortId', handleRedirectUrl);

module.exports = router;