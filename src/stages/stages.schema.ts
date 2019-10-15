import * as mongoose from 'mongoose';

export const StageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coords: {
        type:[Number],
        required: true
    },
    league: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    }
})