import MovieCard from "./MovieCard/MovieCard";
import { MovieCardContainer } from "./MovieCardContainer.styles";

import data from "../data/movies.json";
import { filterDuplicates, sortData } from "./utils";

export default function MoviesCarousel() {
  const filteredData = filterDuplicates(data);
  const sortedData = sortData(filteredData);

  return (
    <MovieCardContainer>
      {/* {sortedData.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })} */}
      <MovieCard key={sortedData[1].id} movie={sortedData[1]} />
    </MovieCardContainer>
  );
}
