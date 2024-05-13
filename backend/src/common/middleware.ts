import { NextFunction, Request, Response } from 'express';
import { CustomError, catchAsync } from './errorhandler';

export const reqMethodValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('reqmethod', req.method);
  if (req.method === 'POST') {
    console.log('body', req.body);

    if (Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ status: 400, message: 'Request data is required.' });
      return;
    }
  }

  next();
  return;
};

export const getReqData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log('reqmethod', req.method);
  if (req.method === 'POST') {
    res.locals.reqdata = req.body;
  } else {
    res.locals.reqdata = req.query;
  }
  console.log(res.locals);

  next();
  return;
};

export const verifyToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.split(' ')[1] as string;
    console.log('token', token, 'FSMovies2023');

    if (!token) {
      res.status(401).send({ status: 401, message: 'Token not found' });
      return;
    }

    if (token !== 'FSMovies2023') {
      throw new CustomError('Token is not valid', 401);
    }

    next();
    return;
  }
);
