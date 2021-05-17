const express= require('express');
const cookieParser=require('cookie-parser');
const path = require('path')
require('dotenv').config({path:'local.env'})
require('./database/mongoose');
const UserRouter=require('./router/userRoutes');
const LinkRouter=require('./router/LinkRoutes');
const errorHandler=require('./errorHandling/errorHandler');
const cors=require('cors');

const port=process.env.PORT || 3000;
const app=express();

app.use(express.static(path.join(__dirname, 'clientside/build')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'clientside/build/index.html'),err=>{
    if(err) res.status(500).send(err);
  });
})
app.use(cors({
    origin:process.env.ORIGIN_SITE,
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use(UserRouter);
app.use(LinkRouter);
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`)
})
