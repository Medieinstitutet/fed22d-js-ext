import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

// const BASEURL = "https://www.omdbapi.com/?apikey=416ed51a&";
const BASEURL = import.meta.env.VITE_OMDB_URL;

export const searchMovies = async (searchText: string) => {
  const response = await get<IOmdbResponse>(`${BASEURL}s=${searchText}`);
  return response.Search;
};

export const getMovieById = async (id: string) => {
  return await get<IMovie>(`${BASEURL}i=${id}`);
};
