import {model} from 'mongoose';
import orderSchema from '../Schemas/orderSchemas.js';

const orderModel = model('order', orderSchema);

export default orderModel;