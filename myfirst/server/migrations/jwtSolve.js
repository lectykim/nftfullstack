const jwt = require('jsonwebtoken');

exports.refresh_verify = (refrsh_token,REFRESH_KEY)=>{
    try{
        return jwt.verify(refrsh_token,REFRESH_KEY);
    }catch(err){
        return 'fail';
    }
}

exports.access_verify = (access_token,SECRET_KEY)=>{
    try{
        return jwt.verify(access_token,SECRET_KEY);
    }catch(err){
        return 'fail';
    }
}