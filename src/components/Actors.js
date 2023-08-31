import React from "react";
import { actors } from "../data";

function Actors() {
  const actorobjs = actors.map((actor) => {
    const amviesobjs = actor.movies.map((mv) => <li key={mv}>{mv}</li>);
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <ul>
          {amviesobjs}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorobjs}
    </div>
  );
}

export default Actors;
