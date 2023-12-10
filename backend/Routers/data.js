const express = require('express');
const router = express.Router();

router.post('/data',(req,res)=>{
    try{
          res.send(global.food_items);
      
    }catch(error){
   console.error(error);
   
    }
})
router.post('/data2',(req,res)=>{
    try{
          res.send(global.foodcategory);
      
    }catch(error){
   console.error(error);
   
    }
})
module.exports=router;