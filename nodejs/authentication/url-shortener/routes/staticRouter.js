const express = require('express');
const URL = require('../models/url');
const router = express.Router();

router.get('/test', async(req,res) => {
    const allurls = await URL.find({});
    console.log(allurls)
    return res.render('home', {
        allurls: allurls
    })
})

module.exports = router;