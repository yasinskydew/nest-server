import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { League } from './interfaces/league.interface';



export const LeagueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String
    },
    season: {
        type: String,
        required: true,
        enum: ['Winter', 'Spring', "Autumn", "Summer"]
    },
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    }
})
