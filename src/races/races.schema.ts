import * as mongoose from 'mongoose';

export const RaceSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    stage: {
       type: mongoose.Schema.Types.ObjectId,
       required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
     }
})