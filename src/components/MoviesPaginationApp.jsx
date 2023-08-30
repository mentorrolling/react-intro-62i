import React, { useState } from "react";
import movies from "../data/movies.json";
import CardApp from "./CardApp";

const MoviesPaginationApp = () => {
  const [index, setIndex] = useState(0);

  const nextPag = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <button onClick={nextPag}>Next</button>
      <CardApp movie={movies[index]} />
    </div>
  );
};

export default MoviesPaginationApp;
