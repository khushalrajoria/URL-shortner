const express =require("express");
const app =express();
const urlRoute =require("./routes/user");
const {connectMongoDb} =require("./connect");
const PORT =8001;

// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/short-URL").then(() => console.log("MongoDB connected"));

// Middleware to parse JSON bodies
app.use(express.json());

// Use URL rxoutes
app.use("/url", urlRoute);

// Start the server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
