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
        }); 
        return res.json({ id: shortID });
    } catch (error) {
        console.error("Error in handleGenerateNewShortURL:", error);
        return res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handleGenerateNewShortURL,
};
