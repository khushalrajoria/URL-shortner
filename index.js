const express = require("express");
const app = express();
const staticrouter=require("./routes/staticRouter");
const path =require("path");
const URL = require("./models/url")
const urlRoute = require("./routes/url");
const { connectMongoDb } = require("./connect");
const PORT = 8001;

// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/short-URL").then(() => console.log("MongoDB connected"));

// setting view engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views")); // this is basically telling our express that all our views will be available here
// Middleware to parse JSON bodies
app.use(express.json()); // so as we are using form data and we are using json so we need another middleware
app.use(express.urlencoded({extended:false})); // means we will also support form data

// Use URL rxoutes
app.use("/url", urlRoute);

app.use("/",staticrouter);


/*
just noticed something that if this app.get  test was below app.get short id, it won't render and i don't know the reason for it but it's terrifying 
that my correct code and so easy on giving errors
one of the reason can be these urls are crashing as shortID is dynamic and will accept anything
*/
app.get("/url/:shortId", async (req, res) => {
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


// Start the server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
