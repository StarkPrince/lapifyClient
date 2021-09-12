import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import lapRoutes from './routes/Lapify.js';
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

mongoose.connect("mongodb+srv://StarkPrince:M14t85u2m1nt93S@cluster0.bmaqq.mongodb.net/lapify", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000, () => console.log(`Server Running on Port: http://localhost:5000`)))
    .catch((error) => console.log(`${error} did not connect`));