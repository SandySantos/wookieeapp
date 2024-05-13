import express from 'express';
const router = express.Router();

import movieRoutes from './movie/movieRoutes';

router.use('/movie', movieRoutes);

export default router;
