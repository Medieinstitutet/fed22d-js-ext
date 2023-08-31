import { IMovie } from "./../models/IMovie";

export interface IAction {
  type: string;
  payload: string;
}

export const MoviesReducer = (movies: IMovie[], action: IAction): IMovie[] => {
  if (action.type === "GOTMOVIES") {
    return JSON.parse(action.payload);
  }

  if (action.type === "SELECTED") {
    return movies.map((movie) => {
      if (movie.id.toString() === action.payload) {
        return { ...movie, selected: !movie.selected };
      }
      return movie;
    });
  }

  return movies;
};
