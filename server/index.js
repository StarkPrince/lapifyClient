import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import lapRoutes from './routes/Lap.js';
import dotenv from 'dotenv';


const app = express();
dotenv.config()

//use bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/lap', lapRoutes);

app.get('/', (req, res) =>
{
    res.send('Hello from lapify')
})

mongoose.connect("mongodb://localhost:27017/lapify", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000, () => console.log(`Server Running on Port: http://localhost:3000`)))
    .catch((error) => console.log(`${error} did not connect`));