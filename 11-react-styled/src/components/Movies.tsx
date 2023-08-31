import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { Wrapper } from "./styled/Wrappers";
import { ViewMovie } from "./ViewMovie";

export const Movies = () => {
  const movies = useContext(MoviesContext);

  return (
    <>
      <Wrapper>
        {movies.map((movie) => (
          <ViewMovie movie={movie} key={movie.id}></ViewMovie>
        ))}
      </Wrapper>
    </>
  );
};
