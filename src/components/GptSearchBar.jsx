import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstant";
import { useRef ,useState} from "react";
import { API_OPTIONS } from "../utils/constant";

import ai from "../utils/gemini";
import { addGptMovieResult, } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  
  //   search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // make an api call to gemini api and get movie results
    try {
       if (!searchText.current.value.trim()) return;

      setLoading(true);
      // Agar input empty hai to function yahin stop ho jayega
     
      // Prompt banaya
      const gptQuery =
        "Act as a Movie Recommendation System and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated like the example result: Sholay, Dangal, PK, Lagaan, 3 Idiots.";

      // Gemini API call
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: gptQuery,
      });

      console.log(response.text);

      // Gemini ke response ko array me convert kar diya
      const movies = response.text.split(",").map((movie) => movie.trim());

      console.log(movies);

      //   for each movie i will search TMDB API
      const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({ movieNames: movies, movieResults: tmdbResults }),
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center pt-36">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-4xl bg-black/80 backdrop-blur-md rounded-xl p-3 shadow-2xl grid grid-cols-12 gap-3"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-9 p-4 rounded-lg outline-none text-lg bg-white"
        />

        {/* button ka purana version */}

        {/* <button
        
          onClick={handleGptSearchClick}
          disabled={loading}
          className="disabled:bg-gray-600 col-span-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition duration-300"
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button> */}

        <button
          onClick={handleGptSearchClick}
          disabled={loading}
          className="disabled:bg-gray-600 col-span-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition duration-300 flex items-center justify-center"
        >
          {loading ? (
            <>
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="ml-2">Searching...</span>
            </>
          ) : (
            lang[langKey].search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
