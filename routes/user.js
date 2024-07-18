const express =require("express");
const router =express.Router();
const {handleGenerateNewShortURL} =require("../controllers/user");

router.post("/",handleGenerateNewShortURL);

module.exports=router;