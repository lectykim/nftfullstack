const express = require('express');
const router = express.Router();
const db = require('../models');
const Post = db.Post;
const User = db.User;
router.use(express.json())
router.use(express.urlencoded({extended:false}));

router.post('/addcontent/:userid',async(req,res,next)=>{
    const{maker,owner,title,contents_nft,about_nft,price} = req.body;
    const userId = req.params.userid;

    try{
        const content = await Post.create({
            maker,
            owner,
            title,
            contents_nft,
            about_nft,
            price,
            UserId:userId
        });
        console.log(content);
        res.status(201).json(content);

    }catch(err){
        console.log(err);
        next(err);
    }
});

router.get('/findcontent/:userid',async(req,res,next)=>{
    const userId = req.params.userid;
    try{
        const content = await Post.findAll({where:{UserId:userId}});
        console.log(content);
        res.status(201).json(content);
    }catch(err){
        console.log(err);
        next(err);
    }
})

router.post('/follow/gofo/:userId',async(req,res,next)=>{
    try{
        const user = await User.findOne({
            where : {id : req.params.userId},
        });
        if(user){
            const results = await user.getSubscribers();
            results.forEach((result)=>{
                console.log(result.id);
            })
            
            res.status(201).json(0);
        }else{
            res.status(404).json(err);
        }
    }catch(err){
        console.log("failed");
        console.log(err);
        res.status(500).json({"message":"failed"});
    }
});

router.post('/follow/addsubscribe/:userId',async(req,res,next)=>{
    try{
        const user = await User.findOne({
            where : {id : req.params.userId},
        });
        if(user){
            const result = await user.addSubscribing(parseInt(req.body.targetId),parseInt(req.body.targetId));
            console.log(result);
            
            res.status(201).json(0);
        }else{
            res.status(404).json(err);
        }
    }catch(err){
        console.log("failed");
        console.log(err);
        res.status(500).json({"message":"failed"});
    }
});




module.exports=router;