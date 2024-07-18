const express = require("express");
const app=express();
const urlRoute=require("./routes/user");
const {connectMongoDb}=require("./connect");
const PORT =8001;

connectMongoDb("mongodb://127.0.0.1:27017/short-URL").then(()=>console.log("MongoDB connected"))

app.use("/url",urlRoute);

app.listen(PORT,()=> console.log(`Server Started at port ${PORT}`));