import { Rating } from "./../types/movies";
import { Movie } from "../types/movies";

export function filterDuplicates(movies: Movie[]): Movie[] {
  return Array.from(new Map(movies.map((movie) => [movie.id, movie])).values());
}

export function sortData(movies: Movie[]) {
  return movies.sort(function (a, b) {
    var valueA = getRating(a.ratings);
    var valueB = getRating(b.ratings);
    if (valueA && valueB && valueA < valueB) {
      return -1;
    } else if (valueA && valueB && valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
}

export function getPosterUrl(poster: string): string {
  const baseUrl = "https://image.tmdb.org/t/p";
  const fileSize = "w500";

  return `${baseUrl}/${fileSize}/${poster}`;
}

export function getRating(ratings: Rating[]) {
  const imdbRating = ratings.find((rating) => rating.id === "imdb");
  return imdbRating?.rating;
}
