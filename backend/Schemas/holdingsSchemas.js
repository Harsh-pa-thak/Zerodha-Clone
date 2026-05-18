import { Schema } from "mongoose";

const holdingsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    avg:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    net:{
        type: String,
        
    },
    day:{
        type: String,
     
    },
    isLoss:{
        type: Boolean,
        
    }
});

export default holdingsSchema;