import { Movie } from "../types/movies";

export function filterDuplicates(movies: Movie[]): Movie[] {
  return Array.from(new Map(movies.map((movie) => [movie.id, movie])).values());
}
