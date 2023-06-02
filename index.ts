import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";

const app: Express = express();

app.use(express.json());
app.use('/', articleController);
app.use('/', commentController);


mongoose.connect("mongodb+srv://liliiannolder:gwsP9HsLAVptOZxG@cluster0.hkhhyeq.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});

