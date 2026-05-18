import {model} from 'mongoose';
import holdingsSchema from '../Schemas/holdingsSchemas.js';

const holdingsModel = model('holdings', holdingsSchema);

export default holdingsModel;