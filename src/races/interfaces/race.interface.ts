import { Document } from 'mongoose';
export interface Race extends Document {
    place: string,
    time: string,
    stage: any,
    user: any
}