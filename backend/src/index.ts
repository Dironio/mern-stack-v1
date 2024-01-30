import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import mongoose from "mongoose";
import router from "./routers";

config({
    path: './.env'
})

const PORT = process.env.PORT || 4000;
const M_URL = process.env.M_URL;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);


async function start() {
    try {
        await mongoose.connect(String(M_URL))
            .then(() => console.log('MongoDB is connected'))
            .catch((e) => console.log('MongoDB error: ', e));

        app.listen(PORT, () => {
            console.log(`port: ${PORT}`)
        })
    } catch (e: any) {
        console.log('Error start: ', e.message);
        process.exit(1);
    }
};

start();