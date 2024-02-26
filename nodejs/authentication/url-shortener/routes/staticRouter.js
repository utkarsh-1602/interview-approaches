const express = require('express');
const URL = require('../models/url');
const router = express.Router();

router.get('/', async(req,res) => {
    const allurls = await URL.find({});
    return res.render('home', {
        allurls: allurls
    })
})

module.exports = router;

router.get('/signup', async(req, res) => {
    return res.render('signup');
})

router.get('/login', async(req, res) => {
    return res.render('login');
})