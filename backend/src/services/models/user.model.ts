import mongoose, { model } from "mongoose";

export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar: string;
    age: number;
    roleId: number;
}

const userSchema = new mongoose.Schema<User>({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    avatar: String,
    age: Number,
    roleId: {
        type: Number,
        default: 1,
    },
});

export const UserModel = model<User>('user', userSchema);