import React from "react";
import { directors } from "../data";

function Directors() {
  const mdirobjs = directors.map((director) => {
    const moviesobjs = director.movies.map((movie) => <li>{movie}</li>)
    return (
      <div>
        <h2>Name: {director.name}</h2>
        <ul>{moviesobjs}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {mdirobjs}
    </div>
  );
}

export default Directors;
