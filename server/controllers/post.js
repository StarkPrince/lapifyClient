import express from 'express';
import LapTime from '../models/lapTime.js';

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
        const { userId, projectId, lapTime } = req.body;
        const user = LapTime.find({ "userId": userId })
        if (user) {
            //search for project
            const project = user.projects.find(project => project._id === projectId);
            if (project) {
                project.lapTimes.push(lapTime);
            }
            else {
                //create a laptime
                user.projects.push({
                    _id: projectId,
                    lapTimes: [lapTime]
                });
            }
            res.json(user);
        }
        else {
            //create a laptime
            const newProject = {
                _id: projectId,
                lapTimes: [lapTime]
            }
            const newLapTime = new LapTime({ userId, projects: [newProject] });
            res.json(newUser);
        }
    }
    catch (err) {
        res.status(409).json(err);
    }
}

export default router;
