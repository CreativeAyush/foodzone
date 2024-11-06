const express=require('express')
const router=express.Router()
const User=require('../models/User')
const {body,validationResult}=require('express-validator');
router.post("/createuser",[body('email').isEmail(),body('name').isLength({min:5}),body('password','Incorrect Password').isLength({min:5})]
,async(req,res)=>{
    try{
       await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            location:  req.body.location

        })
    res.json({success:true});
    }
        catch(error)
        {
            console.log("error")
            res.json({success:false});
        }
})
module.exports=router;