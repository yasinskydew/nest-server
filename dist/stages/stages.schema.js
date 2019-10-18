"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.StageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coords: {
        type: [Number],
        required: true
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
//# sourceMappingURL=stages.schema.js.map