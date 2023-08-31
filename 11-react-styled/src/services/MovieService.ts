import axios from "axios";
import { IMovie } from "../models/IMovie";

const BASE_URL =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getMovies = async () => {
  return await get<IMovie[]>("");
};

export const getMovie = async (id: number) => {
  return await get<IMovie>(`/${id}`);
};
