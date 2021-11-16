export interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  title: string;
  video: boolean;
  ratings: {
    id: string;
    rating: number;
  }[];
}
