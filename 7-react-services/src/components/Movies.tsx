import { IMovie } from "../models/IMovie";

interface IMoviesProps {
  movies: IMovie[];
}

export const Movies = ({ movies }: IMoviesProps) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </>
  );
};
