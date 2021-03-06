const handleDuplicateKeyError=(err,res)=>{
    const field=Object.keys(err.keyValue);
    const code=409;
    const error=`An account with that ${field} already exists.`;
    res.status(code).send({message:error,fields:field});
}

const handleValidationError=(err,res)=>{
    let errors=Object.values(err.errors).map(el=>el.message);
    let fields=Object.values(err.errors).map(el=>el.path);
    let code =400;
    if(errors.length>1){
        res.status(code).send({message:errors,fields});
    }else{
        res.status(code).send({message:errors, fields})
    }
}

const errorHandler=(err,req,res,next)=>{
    try{
        if(err.name==='ValidationError') return err=handleValidationError(err,res);
        if(err.code && err.code===11000) return err=handleDuplicateKeyError(err,res);
    }catch(err){
        res.status(500).send('An unknown error occurred.');
    }
}
module.exports=errorHandler;