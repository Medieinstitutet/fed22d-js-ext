import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IMovieLoader } from "../loaders/movieLoader";
import { IMovie } from "../models/IMovie";

export const Movie = () => {
  // const { movieId } = useParams();
  // const [movie, setMovie] = useState<IMovie>();

  // useEffect(() => {
  //   const getMovie = async () => {
  //     const response = await axios.get<IMovie>(
  //       "https://www.omdbapi.com/?apikey=416ed51a&i=" + movieId
  //     );

  //     setMovie(response.data);
  //   };

  //   if (!movie) getMovie();
  // });

  const { movie } = useLoaderData() as IMovieLoader;

  return (
    <>
      <h2>{movie?.Title}</h2>
      <img src={movie?.Poster} alt={movie?.Title} />
    </>
  );
};
