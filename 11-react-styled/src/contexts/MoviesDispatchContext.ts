import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/MoviesReducer";

export const MoviesDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
