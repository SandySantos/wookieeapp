import { useEffect, useState } from 'react';
import RDialog from '../components/dialog/RDialog';
import { useAppSelector } from '../redux/hooks';
import { getMovieList } from '../redux/movie/action';
import MovieCard from './home/MovieCard';
import MovieData from './home/MovieData';
import { store } from '../redux/store';
import { SET_MOVIEDATA } from '../redux/movie/types';

const Home = () => {
  useEffect(() => {
    getMovieList();
  }, []);

  const [dialogstate, setDialogtate] = useState(false);

  const viewMovie = (data: any) => {
    console.log('hii2');

    store.dispatch({ type: SET_MOVIEDATA, payload: data });
    setDialogtate(true);
  };

  const { list } = useAppSelector((state) => state.movie);

  return (
    <>
      <div className=' px-10 py-5 w-full h-screen select-none '>
        {list && list.length > 0 ? (
          <>
            <div className='font-bold text-xl font-sans'>
              Recommended Movies
            </div>
            <div className='grid  gap-5 mt-3 hover:cursor-pointer'>
              {list.map((el: any, i: number) => (
                <div className='grid gap-2'>
                  <div className='font-semibold '>{el._id}</div>
                  <div className='flex gap-3'>
                    {el.movies &&
                      el.movies.length > 0 &&
                      el.movies.map((movie: any, i: number) => (
                        <MovieCard
                          data={movie}
                          key={i.toString()}
                          viewMovie={viewMovie}
                        />
                      ))}
                    {/* </Swiper> */}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='flex items-center justify-center w-full h-screen font-bold text-2xl'>
            No Data Found...
          </div>
        )}
      </div>
      <RDialog
        modalState={dialogstate}
        content={<MovieData hideDialog={() => setDialogtate(false)} />}
        closeModal={() => setDialogtate(false)}
      />
      {/* {list && list.length > 0 && JSON.stringify(list)} */}
    </>
  );
};

export default Home;
