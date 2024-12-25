const mongoose=require('mongoose');

const connectDB= async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{ autoIndex: true, // Automatically build indexes
            serverSelectionTimeoutMS: 5000,});
        console.log('mongo connected')
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;