const express =require("express");
const URL = require("../models/url");
const router =express.Router();

router.get("/",async(req,res)=>{
  const allurls =await URL.find({});
    return res.render("home",
        {urls:allurls}
    );
})
router.get("/signup",async(req,res)=>{
  const allurls =await URL.find({});
    return res.render("signup",
        {urls:allurls}
    );
})
router.get("/login",async(req,res)=>{
  const allurls =await URL.find({});
    return res.render("login",
        {urls:allurls}
    );
})

module.exports=router;