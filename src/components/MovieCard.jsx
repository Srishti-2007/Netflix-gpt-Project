import { IMG_CDN_URL } from "../utils/constant"

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2">
      <img
        className="rounded-lg shadow-md"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard