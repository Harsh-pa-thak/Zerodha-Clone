import {model } from "mongoose";
import positionsSchema from "../Schemas/positionsSchemas.js";

const positionsModel = model('positions', positionsSchema);

export default positionsModel;