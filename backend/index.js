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
app.get('/allOrders',async(req,res)=>{  
    let allOrders = await orderModel.find({});
    res.json(allOrders);
});


app.post('/addOrder',async(req,res)=>{
    const {name,qty,price,mode} = req.body;
    if(!name || !qty || !price || !mode){
        return res.status(400).json({error:'Missing required fields'});
    }
    const newOrder = new orderModel({name,qty,price,mode});
    await newOrder.save();
    res.json({message:'Order added successfully'});
}); 

app.put('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { qty, price } = req.body;

        if (qty === undefined || price === undefined) {
            return res.status(400).json({ error: 'qty and price are required' });
        }

        const updatedOrder = await orderModel.findByIdAndUpdate(
            id,
            { qty: Number(qty), price: Number(price) },
            { new: true, runValidators: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json(updatedOrder);
    } catch (err) {
        if (err?.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid order id' });
        }
        console.error('Error updating order', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await orderModel.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json({ message: 'Order cancelled successfully' });
    } catch (err) {
        if (err?.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid order id' });
        }
        console.error('Error cancelling order', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
