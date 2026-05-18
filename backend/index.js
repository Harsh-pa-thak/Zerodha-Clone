import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app= express();

mongoose.connect(process.env.MONGO_URI,{}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
});

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
