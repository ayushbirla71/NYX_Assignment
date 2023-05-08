const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')
const multer = require('multer')
const app = express()
const cors=require("cors");
require('dotenv').config()


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(express.json())
app.use(multer().any())
app.use(cors(corsOptions))


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MongodbUrlLink,{useNewUrlParser:true})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))

app.use('/',route)


app.listen(process.env.PORT ||3001,function ()
{console.log("Express app is running on port "+(process.env.PORT ||3001))})

