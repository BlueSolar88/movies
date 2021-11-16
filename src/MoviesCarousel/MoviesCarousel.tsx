import React from "react";
import MovieCard from "./MovieCard/MovieCard";

import data from "../data/movies.json";
import { filterDuplicates } from "./utils";

export default function MoviesCarousel() {
  const filteredData = filterDuplicates(data);
  console.log("data length", data.length);
  console.log("filteredData length", filteredData.length);
  return (
    <div>
      <MovieCard />
    </div>
  );
}
