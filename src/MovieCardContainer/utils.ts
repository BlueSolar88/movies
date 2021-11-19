import { Movie, Rating } from "../types/movies";

export function filterDuplicates(movies: Movie[]): Movie[] {
  return Array.from(new Map(movies.map((movie) => [movie.id, movie])).values());
}

export function sortData(movies: Movie[]) {
  return movies.sort(function (a, b) {
    const rating1 = getRating(a.ratings);
    const rating2 = getRating(b.ratings);
    if (rating1 < rating2) {
      return 1;
    } else if (rating1 > rating2) {
      return -1;
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
  return imdbRating?.rating || 0;
}
