import express from 'express';
import {
  getReqData,
  reqMethodValidate,
  verifyToken,
} from '../../common/middleware';
import { getMovieList } from './middleware';

const router = express.Router();

router.use(reqMethodValidate, getReqData, verifyToken, getMovieList);

export default router;
