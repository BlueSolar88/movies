import { Movie } from "../../types/movies";
import { getPosterUrl } from "../utils";
import { MovieCardStyled, TitleSection, DetailsSection } from "./MovieCard.styles";

type MovieCardProps = {
  movie: Movie;
  id: string;
  active?: boolean;
  favourite?: boolean;
};

export default function MovieCard({ movie, id, active = false, favourite = false }: MovieCardProps) {
  const { title, poster_path, release_date } = movie;
  return (
    <MovieCardStyled id={id} className={active ? "active" : ""}>
      <TitleSection>{title}</TitleSection>
      {poster_path && <img src={getPosterUrl(poster_path)} alt={title} />}
      <DetailsSection>
        <div>
          <span>Release date: {release_date ? release_date : "-"}</span>
        </div>
        <span>Added to favourites: {favourite ? "Yes" : "No"}</span>
      </DetailsSection>
    </MovieCardStyled>
  );
}
