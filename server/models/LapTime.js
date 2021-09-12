import mongoose from 'mongoose';

const LapTimeSchema = new mongoose.Schema({
    userId: String,
    // password: String,
    projects: [{
        _id: String,
        timeStamps: Number
    }]
});

var LapTime = mongoose.model('LapTime', LapTimeSchema);

export default LapTime;