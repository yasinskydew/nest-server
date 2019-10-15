import { Document } from 'mongoose';
export interface Stage extends Document {
    title: string,
    description: string,
    coords: [number, number],
    league: any
}