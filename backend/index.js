import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import orderModel from './Models/orderModels.js';
import holdingsModel from './Models/holdingsModels.js';
import positionsModel from './Models/positionsModels.js';
import watchlistModel from './Models/watchlistModels.js';
import cors from 'cors';

dotenv.config();
const app= express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI,{}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
});

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/allHoldings',async(req,res)=>{
    let allHoldings = await holdingsModel.find({});
    res.json(allHoldings);
});
app.get('/allPositions',async(req,res)=>{
    let allPositions = await positionsModel.find({});
    res.json(allPositions);
});
app.get('/allWatchlist',async(req,res)=>{
    let allWatchlist = await watchlistModel.find({});
    res.json(allWatchlist);
});



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
