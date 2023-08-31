import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../contexts/MoviesContext";
import { IMovie } from "../models/IMovie";
import { Wrapper } from "./styled/Wrappers";
import { ViewMovie } from "./ViewMovie";

export const Movie = () => {
  const { id } = useParams();
  const movies = useContext(MoviesContext);

  let movie: IMovie | undefined = undefined;

  const filteredMovies = movies.filter((movie) => movie.id.toString() === id);
  if (filteredMovies.length === 1) {
    movie = filteredMovies[0];
  }

  return <Wrapper>{movie && <ViewMovie movie={movie}></ViewMovie>}</Wrapper>;
};
