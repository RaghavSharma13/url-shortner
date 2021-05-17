const express=require('express');
const Link=require('../models/LinksModel');
const User=require('../models/userModel');
const auth =require('../middleware/auth');

const router=new express.Router();

router.post('/setLink',auth,async(req,res)=>{
    try{
        const newLink=new Link({
            ...req.body,
            owner:req.user._id
        });
        await newLink.save();
        res.status(201).send();
    }catch(error){
        res.status(400).send('something went wrong')
    }
})

router.get('/getLinks',auth,async(req,res)=>{
    try{
        const user= await User.findById(req.user._id)
        await user.populate('links').execPopulate();
        res.status(200).send(user.links);
    }catch(error){
        res.status(500).send("Links couldn't be fetched. Try again Later.")
    }
})

router.delete('/deleteLink',auth,async(req,res)=>{
    try {
        await Link.findByIdAndDelete(req.body._id);
        res.status(200).send();
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

module.exports=router;
