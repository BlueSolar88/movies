import { Movie } from "../../types/movies";
import { getPosterUrl } from "../utils";
import { MovieCardStyled, TitleSection, DetailsSection } from "./MovieCard.styles";

type MovieCardProps = {
  movie: Movie;
  id: string;
  active?: boolean;
};

export default function MovieCard({ movie, id, active = false }: MovieCardProps) {
  const { title, poster_path, release_date } = movie;
  let displayReleaseDate = release_date ? release_date : "-";
  return (
    <MovieCardStyled id={id} className={active ? "active" : ""}>
      <TitleSection>{title}</TitleSection>
      {poster_path && <img src={getPosterUrl(poster_path)} alt={title} />}
      <DetailsSection>
        <span>Release date: {displayReleaseDate}</span>
      </DetailsSection>
    </MovieCardStyled>
  );
}