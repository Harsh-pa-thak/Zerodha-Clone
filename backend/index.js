import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { createRequire } from 'module';

// CJS packages need createRequire under ESM
const require = createRequire(import.meta.url);
const passport = require('passport');

import orderModel from './Models/orderModels.js';
import holdingsModel from './Models/holdingsModels.js';
import positionsModel from './Models/positionsModels.js';
import watchlistModel from './Models/watchlistModels.js';
import userModel from './Models/userModel.js';

import authRoutes from './routes/authRoutes.js';
import { verifyToken } from './middleware/verifyToken.js';

dotenv.config();

const app = express();

// ─── CORS ────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173', // frontend (Vite default)
  'http://localhost:5174', // dashboard (Vite alt port)
  'http://localhost:3000',
];

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) cb(null, true);
      else cb(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  })
);

app.use(express.json());

passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
app.use(passport.initialize());

// ─── MongoDB ─────────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 8080;

// ─── Public Routes ────────────────────────────────────────────────────────────
app.get('/', (_req, res) => res.json({ message: 'Zerodha Clone API' }));

// Auth (register / login / logout / me)
app.use('/auth', authRoutes);

// ─── Protected Routes (require valid JWT) ────────────────────────────────────
app.get('/allHoldings', verifyToken, async (_req, res) => {
  const allHoldings = await holdingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', verifyToken, async (_req, res) => {
  const allPositions = await positionsModel.find({});
  res.json(allPositions);
});

app.get('/allWatchlist', verifyToken, async (_req, res) => {
  const allWatchlist = await watchlistModel.find({});
  res.json(allWatchlist);
});

app.get('/allOrders', verifyToken, async (_req, res) => {
  const allOrders = await orderModel.find({});
  res.json(allOrders);
});

app.post('/addOrder', verifyToken, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newOrder = new orderModel({ name, qty, price, mode });
  await newOrder.save();
  res.json({ message: 'Order added successfully' });
});

app.put('/orders/:id', verifyToken, async (req, res) => {
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
    if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });
    res.json(updatedOrder);
  } catch (err) {
    if (err?.name === 'CastError') return res.status(400).json({ error: 'Invalid order id' });
    console.error('Error updating order:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/orders/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await orderModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Order not found' });
    res.json({ message: 'Order cancelled successfully' });
  } catch (err) {
    if (err?.name === 'CastError') return res.status(400).json({ error: 'Invalid order id' });
    console.error('Error cancelling order:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
