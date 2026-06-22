import GptMovieSuggestions from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"
import {BACKG_IMG} from "../utils/constant";

const GptSearch = () => {
 return (
   <div className="relative min-h-screen">
  <img
    className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.3]"
    src={BACKG_IMG}
    alt="background"
  />
  <GptSearchBar />
  <GptMovieSuggestions />
</div>
  );
};

export default GptSearch