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
  let displayReleaseDate = release_date ? release_date : "-";
  return (
    <MovieCardStyled id={id} className={active ? "active" : ""}>
      <TitleSection>{title}</TitleSection>
      {poster_path && <img src={getPosterUrl(poster_path)} alt={title} />}
      <DetailsSection>
        <div>
          <span>Release date: {displayReleaseDate}</span>
        </div>
        {favourite && <span>Added to favourites</span>}
      </DetailsSection>
    </MovieCardStyled>
  );
}
