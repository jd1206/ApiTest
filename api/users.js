const db = require('../models');
const {Router} = require('express');
// Crete the router for can use the verbs HTTP
const router = Router();
// Tell the method Router from Express
router.get('/',(req,res)=>{
    res.send({Tittle:'Hello Adso'});
    
});
module.exports=router;