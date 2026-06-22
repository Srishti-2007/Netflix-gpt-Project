import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="relative z-10 mt-[28vh] px-8 pb-20">
      {movieNames.map((movieName, index) => (
        <GptMovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;