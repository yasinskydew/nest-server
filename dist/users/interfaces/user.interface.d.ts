import { Document } from 'mongoose';
export interface User extends Document {
    login: string;
    name: string;
    surname: string;
    password: string;
    role: string;
}
