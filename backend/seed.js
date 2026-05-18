import dotenv from 'dotenv';
import mongoose from 'mongoose';

import holdingsModel from './Models/holdingsModels.js';
import positionsModel from './Models/positionsModels.js';
import watchlistModel from './Models/watchlistModels.js';

import { holdings, positions, watchlist } from '../dashboard/src/data/data.js';

dotenv.config();

async function seed() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI is not set (check backend/.env)');
  }

  await mongoose.connect(mongoUri);

  const results = {
    watchlist: { deleted: 0, inserted: 0 },
    holdings: { deleted: 0, inserted: 0 },
    positions: { deleted: 0, inserted: 0 },
  };

  results.watchlist.deleted = (await watchlistModel.deleteMany({})).deletedCount;
  results.holdings.deleted = (await holdingsModel.deleteMany({})).deletedCount;
  results.positions.deleted = (await positionsModel.deleteMany({})).deletedCount;

  results.watchlist.inserted = (await watchlistModel.insertMany(watchlist)).length;
  results.holdings.inserted = (await holdingsModel.insertMany(holdings)).length;
  results.positions.inserted = (await positionsModel.insertMany(positions)).length;

  console.log('Seed complete:', results);

  await mongoose.disconnect();
}

seed().catch(async (err) => {
  console.error('Seed failed:', err);
  try {
    await mongoose.disconnect();
  } catch {
    // ignore
  }
  process.exitCode = 1;
});
