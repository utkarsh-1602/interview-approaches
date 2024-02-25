const nanoid = require('nanoid');
const URL = require('../models/url')

exports.handleGenerateShortUrl = async(req, res) => {
    try {
        
        const body = req.body;
        if(!body.url){
            return res.status(400).json({error: "url is required"});
        }

        const shortId = nanoid(8);

        await URL.create({
            shortId: shortId,
            redirectUrl: body.url,
            visitedHistory: []
        });

        return res.status(201).json({id: shortId})

    } catch (error) {
        console.log("Error: " + error)       
    }
}