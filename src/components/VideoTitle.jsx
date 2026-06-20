const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-screen aspect-video flex flex-col justify-center px-14 md:px-20 text-white bg-gradient-to-r from-black via-black/70 to-transparent">
<h1 className="text-4xl font-black drop-shadow-2xl">
        {title}
      </h1>

     <p className="mt-4 w-[30%] text-sm leading-6 text-gray-200">
        {overview}
      </p>

      <div className="flex items-center gap-3 mt-7">

        <button
          className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-semibold shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer"
        >
          ▶ Play
        </button>

        <button
          className="flex items-center gap-2 bg-gray-600/70 backdrop-blur-sm text-white px-6 py-2 rounded-md font-semibold shadow-lg transition-all duration-300 hover:bg-gray-500 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer"
        >
          ⓘ More Info
        </button>

      </div>

    </div>
  );
};

export default VideoTitle;