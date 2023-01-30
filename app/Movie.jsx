import Image from "next/image";
import Link from "next/link";
import React from "react";

const Movie = ({ title, id, poster_path, release_path }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <p>{title}</p>
      <p>{release_path}</p>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={500}
          height={500}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
