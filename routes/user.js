const express = require('express');
const router =express.Router();

router.get('/friend/list',async(req,res)=>{
  try{
    res.send({msg:'friendlist'});

  }catch(err){
    console.log(err);
    res.send(err);
  }
});

module.exports=router;
