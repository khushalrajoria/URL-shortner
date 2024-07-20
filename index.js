const express = require("express");
const app = express();
const path =require("path");
const URL = require("./models/url")
const { connectMongoDb } = require("./connect");
const PORT = 8001;


const staticrouter=require("./routes/staticRouter");
const urlRoute = require("./routes/url");
const UserRoute = require("./routes/user");



// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/short-URL").then(() => console.log("MongoDB connected"));

// setting view engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views")); // this is basically telling our express that all our views will be available here
// Middleware to parse JSON bodies
app.use(express.json()); 
app.use(express.urlencoded({extended:false})); 

// Use URL rxoutes
app.use("/url", urlRoute);
app.use("/",staticrouter);
app.use("/user",UserRoute);

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



/*  so for keeping a logged in state we can use a temp session and for this we 
will install a package called uuid that will generate session key for authentication during the logged in period */