const express = require("express");
const app = express();
const URL = require("./models/url")
const urlRoute = require("./routes/url");
const { connectMongoDb } = require("./connect");
const PORT = 8001;

// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/short-URL").then(() => console.log("MongoDB connected"));

// Middleware to parse JSON bodies
app.use(express.json());

// Use URL rxoutes
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry= await URL.findOneAndUpdate(
    {
        shortId
    }, 
    {
        $push: {
            visitHistory:{ 
                timeStamp:Date.now(),
            },
        },
     }
    );
    res.redirect(entry.redirectUrl);
});

app.get("/test",(req,res)=>{
    return res.end("<h1>Hey hello from server</h1>");
});

// Start the server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
