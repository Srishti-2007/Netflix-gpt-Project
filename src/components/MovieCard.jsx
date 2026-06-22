import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {

  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4 cursor-pointer transition-transform duration-300 hover:scale-110">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;