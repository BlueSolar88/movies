import { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { MovieCardContainer } from "./MovieCardContainer.styles";
import { Grid, Row, Col } from "react-flexbox-grid";

import data from "../data/movies.json";
import { filterDuplicates, sortData } from "./utils";
import { Movie } from "../types/movies";

export default function MoviesCarousel() {
  const [focusedElement, setFocusedElement] = useState(0);
  const [favourites, setFavourites] = useState<number[]>([]);

  const filteredData = filterDuplicates(data);
  const sortedData = sortData(filteredData);

  const numberOfColumns = 4;
  const numberOfRows = Math.ceil(sortedData.length / numberOfColumns);

  document.onkeydown = checkKey;

  const newLocal = document.getElementById(focusedElement.toString());
  newLocal && newLocal.scrollIntoView({ behavior: "smooth" });

  function checkKey(e: KeyboardEvent) {
    e = e || window.event;
    e.preventDefault();

    let nextPosition;
    let positionInRow;
    switch (e.key) {
      case "Up":
      case "ArrowUp":
        nextPosition = focusedElement - numberOfColumns;
        if (nextPosition >= 0) {
          setFocusedElement(nextPosition);
        }
        break;
      case "Down":
      case "ArrowDown":
        nextPosition = focusedElement + numberOfColumns;
        if (nextPosition <= numberOfRows) {
          setFocusedElement(nextPosition);
        }
        break;
      case "Left":
      case "ArrowLeft":
        nextPosition = focusedElement - 1;
        positionInRow = focusedElement % numberOfColumns;
        if (positionInRow > 0) {
          setFocusedElement(nextPosition);
        }
        break;
      case "Right":
      case "ArrowRight":
        nextPosition = focusedElement + 1;
        positionInRow = focusedElement % numberOfColumns;
        if (positionInRow < 3) {
          setFocusedElement(nextPosition);
        }
        break;
      case "Enter":
        toggleFavourite(sortedData[focusedElement]);
        break;
      default:
        return;
    }
  }

  const toggleFavourite = ({ id }: Movie) => {
    let index = favourites.indexOf(id);
    if (index !== -1) {
      setFavourites((prevState) => {
        return prevState.filter((favourite) => favourite !== id);
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
