exports.isLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(403).send({"code" : 'is not logined'});
    }
}

exports.isNotLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    } else{
        const message = encodeURIComponent('logined');
        console.log(message);
        res.status(403).send({"code" : 'is loggined'});
    }
}