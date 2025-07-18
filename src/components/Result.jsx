import React from "react";

function Result(props) {
  const boxes = props.movies.map((item, index) => (
    <Box
      key={index}
      image={item.poster_path}
      title={item.original_title}
      rating={item.vote_average}
      movie={item}
      addToFavorites={props.addToFavorites}
    />
  ));

  return <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{boxes}</div>;
}

const Box = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="shadow min-h-[200px] border border-black mt-3 pb-3 rounded overflow-hidden">
      <img
        src={IMGPATH + props.image}
        alt="Movie Poster"
        className="w-full h-[300px] object-cover"
      />
      <div className="flex justify-between px-2 mt-2 items-center">
        <span className="text-lg font-semibold">{props.title}</span>
        <span className="text-yellow-500 font-bold">{props.rating}</span>
      </div>
      {props.addToFavorites && (
        <div className="px-2 mt-2">
          <button
            onClick={() => props.addToFavorites(props.movie)}
            className="bg-blue-500 hover:bg-blue-600 text-black py-1 px-3 rounded mt-2"
          >
            Add to Favourite
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;