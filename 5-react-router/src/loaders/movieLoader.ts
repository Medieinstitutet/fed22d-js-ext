import axios from "axios";
import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";
import { IMovie } from "../models/IMovie";

export interface IMovieLoader {
  movie: IMovie;
}

const pathNames = {
  movieDetail: "/movie/:movieId",
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof pathNames.movieDetail>>;
}

export const movieLoader = async ({ params }: Args) => {
  const response = await axios.get<IMovie>(
    "https://www.omdbapi.com/?apikey=416ed51a&i=" + params.movieId
  );

  const data: IMovieLoader = { movie: response.data };
  return data;
};
