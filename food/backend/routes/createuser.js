const express=require('express')
const router=express.Router()
const User=require('../models/User')
const {body,validationResult}=require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt =require("bcryptjs");
const jwtSecret="Mynameesayush"
router.post("/createuser",[body('email').isEmail(),body('name').isLength({min:5}),body('password','Incorrect Password').isLength({min:5})]
,async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors})
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try{
       await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPassword,    //encrytpted
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
router.post("/loginuser",[body('email').isEmail(),body('name').isLength({min:5}),body('password','Incorrect Password').isLength({min:5})]
,async(req,res)=>{
    let email=req.body.email;
    try{
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors:" Try logging with correct email and password"});
        }
        const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
        if(!pwdCompare){
            return res.status(400).json({errors:" Try logging with correct email and password"});
        }
        const data ={
            user:{
                id:userData.id,

            }
        }
        const authToken=jwt.sign(data,jwtSecret)
       
    return res.json({success:true,authToken});
    }
        catch(error)
        {
            console.log("error")
            res.json({success:false});
        }
})
module.exports=router;