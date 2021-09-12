import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

//connect mongoose with local database
mongoose.connect('mongodb://localhost:27017/lapify');

//create a timestamp schema
const timestampSchema = new mongoose.Schema({
    id: Number,
    timestamp: Number
});

const Timestamp = mongoose.model('Timestamp', timestampSchema);



