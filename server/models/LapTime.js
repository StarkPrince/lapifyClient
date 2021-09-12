import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    timeStamps: {
        type: [Number]
    }
});

const LapTimeSchema = new mongoose.Schema({
    userId: String,
    password: String,
    project: ProjectSchema
});

var LapTime = mongoose.model('LapTime', LapTimeSchema);
var Project = mongoose.model('Project', ProjectSchema);

export default LapTime;