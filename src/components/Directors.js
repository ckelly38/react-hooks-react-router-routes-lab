import React from "react";
import { directors } from "../data";
import MainComponent from "./MainComponent";

function Directors() {
  return <MainComponent data={directors} type={"Directors"} />;
}

export default Directors;
