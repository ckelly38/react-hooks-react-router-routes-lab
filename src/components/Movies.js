import React from "react";
import { movies } from "../data";
import MainComponent from "./MainComponent";

function Movies() {
  return <MainComponent data={movies} type={"Movies"} />;
}

export default Movies;
