const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    try {
        const body = req.body;
        if (!body || !body.url) {
            return res.status(400).json({ error: "URL not provided in request body" });
        }
        const shortID = shortid();
        await URL.create({
            shortId: shortID,
            redirectUrl: body.url,
            visitHistory: [],
            createdBy:req.user._id,
        }); 
        return res.render("home",{id: shortID})
        // return res.json({ id: shortID }); // rather than sending json response we are now rendering UI
    } catch (error) {
        console.error("Error in handleGenerateNewShortURL:", error);
        return res.status(500).json({ error: "Server error" });
    }
}

async function handleGetAnal(req,res){
    const shortId=req.params.shortId; // this is the way to take input in express basically
    const result =await URL.findOne({shortId});
    return res.json({
        totalClicks:result.visitHistory.length,analytics:result.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnal
};
