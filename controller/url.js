const {nanoid}=require('nanoid')
const express=require('express')
const URL=require('../models/url')
async function handleGenerateShortUrl(req,res){
    const shortId=nanoid(8);
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'});
    await URL.create({
        shortId: shortId,
        redirectURL:body.url,
        visitHistory:[],

    });
    return res.json({id:shortId})

}

module.exports={
    handleGenerateShortUrl,

}