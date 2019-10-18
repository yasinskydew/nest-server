"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.RaceSchema = new mongoose.Schema({
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
});
//# sourceMappingURL=races.schema.js.map