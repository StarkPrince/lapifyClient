import express from 'express';
import { getLapTimes, updateLapTime, addLapTime } from '../controllers/post.js';

const router = express.Router();

router.get('/', getLapTimes);
router.post('/:projectId', addLapToExistingProject);
router.put('/:projectId', updateLapTime);

export default router;