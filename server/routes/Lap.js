import express from 'express';
import { getLapTimes, addLapTime } from '../controllers/post';

const router = express.Router();

router.get('/', getLapTimes);
router.post('/', addLapTime);

export default router;