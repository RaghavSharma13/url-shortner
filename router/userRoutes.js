const express=require('express');
const User=require('../models/userModel');
const Link=require('../models/LinksModel');
const auth=require('../middleware/auth');
const router=new express.Router();
router.post('/users/signUp',async(req,res,next)=>{ 
    try{
        const newUser=new User(req.body);
        const refreshToken=await newUser.generateRefreshToken();
        await newUser.generateLoginToken();
        res.cookie('jwt',refreshToken,{
            expires:new Date(Date.now()+1000*60*60*7),
            httpOnly:true,
            secure:process.env.ENV==='production'?true:false,
            sameSite:'Lax'
        })
        res.status(201).send();
    }
    catch(error){
        next(error);
    };
})
router.post('/user/login',async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.email,req.body.password);
        const refreshToken=await user.generateRefreshToken();
        await user.generateLoginToken();
        res.cookie("jwt", refreshToken,{
            expires:new Date(Date.now()+1000*60*60*24),
            sameSite:'Lax',
            httpOnly:true,
            secure:process.env.ENV==='production'?true:false
        });
        res.status(200).send();
    }catch(error){
        res.status(500).send('Invalid Login.');
    }
})
router.delete('/user/signOut',auth,async(req,res)=>{
    try{
        await Link.deleteMany({owner:req.user._id});
        await User.findByIdAndRemove(req.user._id);
        res.status(204).send();
    }catch(error){
        console.log(error);
    }
})
module.exports=router;