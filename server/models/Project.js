import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    timeStamps: [Number]
});

export default mongoose.model('Project', ProjectSchema);