import React from "react";
import { movies } from "../data";

function Movies() {
  const movieobjs = movies.map((movie) => {
    const genres = movie.genres.map((genre) => <li>{genre}</li>);
    return (
      <div>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <ul>
          {genres}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieobjs}
    </div>
  );
}

export default Movies;
