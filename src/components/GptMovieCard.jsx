import { IMG_CDN_URL } from "../utils/constant";

const GptMovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[170px] cursor-pointer transition-all duration-300 hover:scale-105">
      <img
        className="rounded-xl shadow-lg hover:shadow-red-500/40"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default GptMovieCard;