const URL=require("../models/url")
const shortId=require("./url")
async function handlegetShortId(req,res){
    const shortId=req.params.shortId;
    const entry =await URL.findOneAndUpdate({
        shortId:shortId,
    },{$push:{
        visitHistory:{
            timestamp:Date.now(),
        },
    }})

    res.redirect(entry.redirectURL);

}
module.exports={
    handlegetShortId,
}