const MovieCard = ({ viewMovie, data }: any) => {
  return (
    <>
      <div
        className='rounded-lg  shadow-md'
        onClick={() => {
          console.log('hiii');

          viewMovie(data);
        }}
      >
        <img
          className='w-48  h-48 object-cover'
          src={data.poster}
          alt={data.title}
        />

        {/* <div className='w-full'>
          <div className='capitalize font-semibold text-center tracking-tight text-slate-900'>
            {data.title}
          </div>

          <div className='capitalize mt-2 font-normal text-gray-600 '>
            {data.genre.toString()}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MovieCard;
