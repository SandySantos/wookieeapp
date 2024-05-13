import { useAppSelector } from '../../redux/hooks';

const MovieData = ({ hideDialog }: { hideDialog: any }) => {
  const { moviedata }: any = useAppSelector((state) => state.movie);

  return (
    <>
      {moviedata ? (
        <>
          <div className=' grid grid-cols-1 gap-5'>
            <div className='max-w-4xl'>
              <img
                src={moviedata.poster}
                alt={moviedata.title}
                className='w-full h-96 object-cover'
              />
            </div>

            <div className='w-full  ml-6'>
              <div className=' capitalize font-semibold text-center text-gray-900 '>
                {moviedata.title}
              </div>

              {/* <div className='capitalize text-lg font-normal text-gray-600  mt-3'>
                {moviedata.genre.toString()}
              </div> */}

              <div className='mt-5 flex flex-col gap-3'>
                <div className='flex gap-1'>
                  <div className='font-medium'>Rating</div>
                  <div className='font-medium'>-</div>
                  <div className='font-medium'>
                    {' '}
                    <div className='flex gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        className='w-6 h-6 fill-green-500 stroke-green-500'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                        />
                      </svg>

                      <div className='font-semibold '>
                        {moviedata.imdb_rating}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <div className='font-medium'>Duration</div>
                  <div className='font-medium'>-</div>
                  <div className='font-medium'>{moviedata.length}</div>
                </div>

                <div className='flex gap-1'>
                  <div className='font-medium'>Directors</div>
                  <div className='font-medium'>-</div>
                  <div className='font-medium'>
                    {moviedata.director.toString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <div
              className='inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer  '
              onClick={hideDialog}
            >
              Cancel
            </div>
          </div>
        </>
      ) : (
        <div>Movie Not Found</div>
      )}
    </>
  );
};

export default MovieData;
