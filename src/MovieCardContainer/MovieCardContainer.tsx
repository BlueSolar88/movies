import { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { MovieCardContainer } from "./MovieCardContainer.styles";
import { Grid, Row, Col } from "react-flexbox-grid";

import data from "../data/movies.json";
import { filterDuplicates, sortData } from "./utils";
import { Movie } from "../types/movies";

export default function MoviesCarousel() {
  const [focusedElement, setFocusedElement] = useState(0);
  const [favourites, setFavourites] = useState([] as number[]);

  const filteredData = filterDuplicates(data);
  const sortedData = sortData(filteredData);

  const numberOfColumns = 4;
  const numberOfRows = Math.ceil(sortedData.length / numberOfColumns);

  document.onkeydown = checkKey;

  const newLocal = document.getElementById(focusedElement.toString());
  newLocal && newLocal.scrollIntoView({ behavior: "smooth" });

  function checkKey(e: any) {
    e = e || window.event;
    e.preventDefault();

    if (e.keyCode === 38) {
      // up arrow
      const nextPosition = focusedElement - 4;
      if (nextPosition >= 0) {
        setFocusedElement(nextPosition);
      }
    } else if (e.keyCode === 40) {
      // down arrow
      const nextPosition = focusedElement + 4;
      if (nextPosition <= numberOfRows) {
        setFocusedElement(nextPosition);
      }
    } else if (e.keyCode === 37) {
      // left arrow
      const nextPosition = focusedElement - 1;
      const positionInRow = focusedElement % 4;
      if (positionInRow > 0) {
        setFocusedElement(nextPosition);
      }
    } else if (e.keyCode === 39) {
      // right arrow
      const nextPosition = focusedElement + 1;
      const positionInRow = focusedElement % 4;
      if (positionInRow < 3) {
        setFocusedElement(nextPosition);
      }
    } else if (e.keyCode === 13) {
      toggleFavourite(sortedData[focusedElement]);
    }
  }

  const toggleFavourite = ({ id }: Movie) => {
    let index = favourites.indexOf(id);
    if (index !== -1) {
      setFavourites((prevState) => {
        return prevState.splice(index, 1);
      });
    } else {
      setFavourites((prevState) => {
        return [...prevState, id];
      });
    }
  };

  return (
    <MovieCardContainer>
      <Grid fluid>
        <Row>
          {sortedData.map((movie, index) => {
            return (
              <Col xs={3}>
                <MovieCard
                  active={focusedElement === index}
                  id={index.toString()}
                  key={movie.id}
                  movie={movie}
                  favourite={favourites.indexOf(movie.id) !== -1}
                />
              </Col>
            );
          })}
        </Row>
      </Grid>
    </MovieCardContainer>
  );
}
