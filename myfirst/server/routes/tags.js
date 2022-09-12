const express = require('express');
const router = express.Router();
const db = require('../models');
const Post = db.Post;
const User = db.User;
const Hashtag = db.Hashtag;
router.use(express.json())
router.use(express.urlencoded({extended:false}));

router.post('/addtags/:contentid',async(req,res,next)=>{
    const contentId = req.params.contentid;
    let output = [];
    try{
        const content = await Post.findOne({where:{id:contentId}});

        Object.keys(req.body).forEach(async key=>{
            console.log(`${key} : ${req.body[key]}`);
            const tags = await Hashtag.findOne({where:{title:req.body[key]}});
            if(tags){
                
                output.push(tags.title);
                console.log(tags.title);
                console.log(output);
                content.addHashtag(tags.id);
            }else{
                const input = await Hashtag.create({
                    title : req.body[key]
                });
                output.push(input.title);
                console.log(input.title);
                content.addHashtag(input.id);
            }

        })
        res.status(201).json(output);
    }catch(err){
        console.log(err);
        next(err);
    }

    
})

module.exports=router