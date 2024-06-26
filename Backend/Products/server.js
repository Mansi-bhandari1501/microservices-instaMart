import express from 'express';
import dotenv from 'dotenv';
import morgon from 'morgan';
import connectDB from './config/db.js';
import routes from "./routes/index.js"
import cors from 'cors';
import multer from 'multer';
import path from 'path';
// import bodyParser from 'body-parser';
import consumeMessages from './worker/consumer.js';
const app = express();

dotenv.config()

connectDB();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST","DELETE","PUT","PATCH"],
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgon('dev'));
// app.use(bodyParser.json("application/json"))
// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

app.use('/', routes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));


consumeMessages()

const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})
