import Image from "next/image";
import React from "react";

const MovieDetail = async ({ params }) => {
  const { movie } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <div className="bg-black">
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-large">{res.release_date}</h2>
        <h2 className="text-yellow-800">{res.runtime} minutes</h2>
        <h2 className="bg-green inline-block my-2 py-2 px-4 rounded ">
          {res.date}
        </h2>
        <Image
          className="my-12"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
