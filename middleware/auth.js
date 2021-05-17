const jwt=require('jsonwebtoken');
const User=require('../models/userModel');

const auth= async(req,res,next)=>{
    try{
        const refreshToken=req.header('Authorization').replace('Bearer ','');
        const decodedRefresh=jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
        const user=await User.findById(decodedRefresh.data);
        if(!user) throw new Error();
        const loginToken=user.authToken;
        jwt.verify(loginToken,process.env.LOGIN_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                user.generateLoginToken();
                return;
            }
        }); 
        req.user=user;
        next();
    }catch(error){
        res.status(401).send({error:"Please Login First"});
    } 
}
module.exports=auth;