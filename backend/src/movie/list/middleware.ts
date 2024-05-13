import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../../common/errorhandler';
import mongodb from '../../common/mongodb';

export const getMovieList = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const mongoDb = await mongodb();
    const data = await mongoDb
      .collection('movies')
      .aggregate([
        {
          $unwind: '$genres',
        },
        {
          $group: {
            _id: '$genres',
            movies: {
              $push: {
                director: '$director',
                imdb_rating: '$imdb_rating',
                length: '$length',
                poster: '$poster',
                title: '$title',
                slug: '$slug',
              },
            },
          },
        },
      ])
      .toArray();

    res.status(200).send({
      status: 200,
      data,
    });
  }
);
