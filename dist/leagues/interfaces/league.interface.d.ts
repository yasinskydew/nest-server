import { Document } from 'mongoose';
export interface League extends Document {
    title: string;
    description: string;
    season: string;
    users: any[];
}
