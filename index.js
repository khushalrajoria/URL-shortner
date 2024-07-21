const express = require("express");
const app = express();
const path =require("path");
const URL = require("./models/url")
const cookieParser=require("cookie-parser");
const { connectMongoDb } = require("./connect");
const {restrictToLoggedInUserOnly,checkAuth}=require("./middlewares/auth");
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
app.use(cookieParser()); 

// Use URL rxoutes
app.use("/url", restrictToLoggedInUserOnly,urlRoute);
app.use("/",checkAuth,staticrouter);
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



/*
    so when we maintain state for keeping track of our login etc we use up server's memory so in order to avoid it 
    we can use stateless login, meaning we can use tokens and then by those tokens we can provide both id and session id
    to the user it self but with the signature or stamp to confirm that it is provided by us


    for that we will use a library called json web tokens
*/