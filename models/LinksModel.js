const mongoose=require('mongoose');

const linkSchema=new mongoose.Schema({
    fullLink:{
        type:String,
        required:true
    },
    shortLink:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
});

const Link= mongoose.model('Link',linkSchema);
module.exports=Link; 