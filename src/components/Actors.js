import React from "react";
import { actors } from "../data";
import MainComponent from "./MainComponent";

function Actors() {
  return <MainComponent data={actors} type={"Actors"} />;
}

export default Actors;
