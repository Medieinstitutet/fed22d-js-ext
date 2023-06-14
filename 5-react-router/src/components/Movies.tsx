import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IMoviesLoader } from "../loaders/moviesLoader";

export const Movies = () => {
  const { movies } = useLoaderData() as IMoviesLoader;
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate("/movie/" + id);
  };

  return (
    <>
      {movies.map((movie) => {
        return (
          <div onClick={() => handleClick(movie.imdbID)} key={movie.imdbID}>
            <h4>{movie.Title}</h4>
            {/* <Link to={"/movie/" + movie.imdbID}>Läs mer...</Link> */}
          </div>
        );
      })}
    </>
  );
};
