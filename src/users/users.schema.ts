import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        unique:true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type:String,
        default: 'user'
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
});

