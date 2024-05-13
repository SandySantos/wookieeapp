import express from 'express';

const router = express.Router();

import ListRouter from './list/router';

router.get('/list', ListRouter);

export default router;
