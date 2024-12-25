const express=require("express");
const cors=require("cors");
const mongo=require("mongoose");
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const userRoutes=require('./routes/userroutes')

//load the envoirnment var
dotenv.config();

//config/db or mongoose connection
connectDB(); 

//app initialization
const app=express();

//middleware to parse
app.use(express.json());//it handles cors origin
app.use(cors());  //its parsing into json


//for register 
app.use('/register',userRoutes)

app.get('/',(req,res)=>{
    res.send("wlcm")
})

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
})