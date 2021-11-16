import { Movie } from "../../types/movies";
import { getPosterUrl } from "../utils";
import { MovieCardStyled, TitleSection } from "./MovieCard.styles";

type MovieCardProps = {
  movie: Movie;
  active?: boolean;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const { title, poster_path, release_date } = movie;
  return (
    <MovieCardStyled>
      <TitleSection>{title}</TitleSection>
      {poster_path && <img src={getPosterUrl(poster_path)} alt={title} />}
      {release_date && <span>Release date: {release_date}</span>}
    </MovieCardStyled>
  );
}
