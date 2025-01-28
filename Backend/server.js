const express=require("express");
const cors=require("cors");
const mongo=require("mongoose");
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const userRoutes=require('./routes/userroutes')
const configureCORS = require('./middleware/corsMiddleware');

//load the envoirnment var
dotenv.config();
//config/db or mongoose connection
connectDB(); 
//app initialization
const app=express();
//middleware to parse
app.use(express.json());
//cors options 
app.use(configureCORS()); 


//for register 
app.use('/app',userRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
  });


app.get('/',(req,res)=>{
    res.send("wlcm")
})

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running in ${port}`);
})