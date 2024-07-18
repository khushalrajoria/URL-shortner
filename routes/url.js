const express =require("express");
const router =express.Router();
const {handleGenerateNewShortURL,handleGetAnal} =require("../controllers/url");

router.post("/",handleGenerateNewShortURL);
router.get('/analytics/:shortId',handleGetAnal);
module.exports=router;