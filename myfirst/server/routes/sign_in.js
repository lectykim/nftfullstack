const express = require('express');
const router = express.Router();
const {isNotLoggedIn,isLoggedIn} = require('./middlewares');
const bcrypt = require('bcrypt');
const db = require('../models');
const User = db.User;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwtSolve = require('./../migrations/jwtSolve');

router.use(express.json())
router.use(express.urlencoded({extended:false}));

const SECRET_KEY = 'gosegu';
const REFRESH_KEY = 'hynaxis';
router.post('/api/signin',async (req,res,next)=>{
  const {email,nick,password} = req.body;
  try{
    const exUser = await User.findOne({where : {email}});
    if(exUser){
      return res.send({"code" : 'already registed'})
    }
    const hash = await bcrypt.hash(password,12);
    await User.create({
      email,
      nick,
      password:hash,
    });
    return res.send({"code" : 'regist successed'});
  } catch (error){
    console.error(error);
    return next(error);
  }



});

router.post('/api/login',isNotLoggedIn,(req, res, next) => {

  console.log('/user/login-----> ', req.body.email,req.body.password);

  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if(info){
      console.log(info);
      return res.status(401).send(info.message);
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      const email = req.body.email; 

      const access_token = jwt.sign({
        type:'JWT',
        email:email
      },SECRET_KEY,{
        expiresIn:'24h',
        issuer:'backend',
      });
      const refresh_token = jwt.sign({
        type:'JWT',
        email:email
      },REFRESH_KEY,{
        expiresIn:'24h',
        issuer:'backend',
      });
      console.log(req.headers);
      const exUser = await User.findOne({where : {email}});
      console.log(jwtSolve.refresh_verify(refresh_token,REFRESH_KEY));
      console.log(jwtSolve.access_verify(access_token,SECRET_KEY));
      
      return res.status(200).json({
        code:200,
        message:'success',
        access_token:access_token,
        refresh_token:refresh_token,
        nick:exUser.nick
      });
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.post('/api/silent-login',(req,res,next)=>{
  if(!jwtSolve.refresh_verify(rqe.body.refresh_token,REFRESH_KEY)=='fail'){
    const refresh_token = jwt.sign({
      type:'JWT',
      email:email
    },REFRESH_KEY,{
      expiresIn:'24h',
      issuer:'backend',
    });
    const access_token = jwt.sign({
      type:'JWT',
      email:email
    },SECRET_KEY,{
      expiresIn:'24h',
      issuer:'backend',
    });

    return res.status(200).json({
      access_token:access_token,
      refresh_token:refresh_token,
    })
  }
})

router.post('/api/logout',(req,res,next)=>{
  req.logout(function(err){
    if(err) {return next(err);}
    return res.send({"code" : 'logout successed'});
  })
})


module.exports=router;