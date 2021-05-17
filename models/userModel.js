const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:[true,'Enter an Email Id.'],
        trim:true,
        unique:[true,'User already Signed Up.'],
        validate:[validator.isEmail,'Invalid Email.']
    },
    password:{
        type:String,
        required:[true,'Enter a password.'],
        trim:true,
        minlength:[7,'Password should be atleast 7 characters.'],
    },
    authToken:{
        type:String,
        required:true
    }},
    {
        timestamps:true
    }
);
userSchema.virtual('links',{
    ref:'Link',
    localField:'_id',
    foreignField:'owner'
})

userSchema.statics.findByCredentials=async(email,password)=>{
    const user=await User.findOne({
        email,
    })
    if(!user) throw new Error('Unable to Login');
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) throw new Error('Unable to Login');
    return user;
}
userSchema.methods.toJSON= function(){
    const user=this;
    const userObject=user.toObject();
    delete userObject.password;
    delete userObject.authToken;
    return userObject;
    
}
userSchema.methods.generateRefreshToken=function(){
    const user=this;
    const refreshToken=jwt.sign({data:user._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:60*60*24});
    return refreshToken;
}

userSchema.methods.generateLoginToken=async function(){
    const user=this;
    const loginToken=jwt.sign({data:user.email},process.env.LOGIN_TOKEN_SECRET,{expiresIn:60});
    user.authToken=loginToken;
    await user.save();
}

userSchema.pre('save',async function(next){
    const user=this;
    if(user.isModified('password')) user.password=await bcrypt.hash(user.password,8);
    next();
})


const User=mongoose.model('User',userSchema);
module.exports=User;