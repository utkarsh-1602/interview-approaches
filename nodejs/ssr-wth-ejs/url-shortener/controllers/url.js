const {nanoid} = require('nanoid');
const URL = require('../models/url')

exports.handleGenerateShortUrl = async(req, res) => {
    try {
        
        const body = req.body;
        if(!body.url){
            return res.status(400).json({error: "url is required"});
        }

        const shortId = nanoid(8)

        await URL.create({
            shortId: shortId,
            redirectUrl: body.url,
            visitedHistory: []
        });

        return res.status(201).json({id: shortId})

    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({message: "Server error: " + error})       
    }
}

exports.handleRedirectUrl = async(req, res) => {
    try {

        const shortId = req.params.shortId;

        if(!shortId){
            return res.status(400).json({error: "shortId not Found"});
        }

        const entry = await URL.findOneAndUpdate({shortId}, {$push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }})

        return res.status(200).redirect(entry.redirectUrl);

    } catch (error) {
        
    }
}

exports.handleGetAnalytics = async(req, res) => {
    try {

        const shortId = req.params.shortId;
        const result = await URL.findOne({shortId});

        return res.status(201).json({totalClicks: result.visitHistory.length, analytics: result.visitHistory})
        
    } catch (error) {
        console.log("Error getting Analytics: ", error)
    }
}