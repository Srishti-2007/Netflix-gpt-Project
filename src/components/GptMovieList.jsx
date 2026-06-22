import GptMovieCard from "./GptMovieCard";

const GptMovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-12">

      <h2 className="text-3xl font-bold text-white mb-5">
        🍿 {title}
      </h2>

      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-3">

        {movies.map((movie) => (
          <GptMovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}

      </div>

    </div>
  );
};

export default GptMovieList;