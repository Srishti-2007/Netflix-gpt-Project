import MovieCard from "./MovieCard"


const MovieList = ({title,movies}) => {
    console.log(movies);
     if (!movies) return null;
   
    
  return (
    <div className="px-6 ">
       <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>
       <div className="flex overflow-x-scroll no-scrollbar py-2">
            
            <div className="flex">
                {movies.map((movie)=> <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
              
            </div>
        </div>
    </div>
  )
}


export default MovieList