const express = require('express');
const URL = require('../models/url');
const router = express.Router();

router.get('/', async(req,res) => {
    console.log(req)
    if(!req.user) return res.redirect('/login')
    const allurls = await URL.find({createdBy: req.user._id});
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