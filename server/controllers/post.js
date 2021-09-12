import express from 'express';
import mongoose from 'mongoose';

import LapTime from '../models/lapTime';

const router = express.Router();

export const getLapTimes = (req, res) =>
{
    try {
        const lapTimes = LapTime.find({});
        res.json(lapTimes);
    } catch (err) {
        res.json(err);
    }
};

export const addLapTime = (req, res) =>
{
    try {
        const { lapTime } = req.body;
        const newLapTime = new LapTime({ lapTime });
        newLapTime.save();
        res.status(201).json(newLapTime);
    } catch (err) {
        res.status(409).json(err);
    }
}

export default router;
