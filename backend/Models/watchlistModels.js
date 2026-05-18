import {model} from 'mongoose';
import watchlistSchema from '../Schemas/watchlistSchemas.js';

const watchlistModel = model('watchlist', watchlistSchema);

export default watchlistModel;