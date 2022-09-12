const express = require('express');

const router = express.Router();

router.get('/api',(req,res,next)=>{
    res.send({page:'hi'});
    //res.render('api',{title:'main page'});
});


router.post('/api/:id',(req,res)=>{

    const{
        body:{id,name,pass}
    } = req;

    console.log(id,name,pass,"this is backend");
    res.send({page:"success"});

});


module.exports=router;