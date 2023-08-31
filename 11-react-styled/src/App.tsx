import { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { MoviesContext } from "./contexts/MoviesContext";
import { MoviesDispatchContext } from "./contexts/MoviesDispatchContext";
import { MoviesReducer } from "./reducers/MoviesReducer";
import { router } from "./Router";
import { getMovies } from "./services/MovieService";

function App() {
  const [movies, dispatch] = useReducer(MoviesReducer, []);

  useEffect(() => {
    if (movies.length > 0) return;

    const getData = async () => {
      const movies = await getMovies();
      dispatch({ type: "GOTMOVIES", payload: JSON.stringify(movies) });
    };

    if (movies.length === 0) {
      getData();
    }
  });

  return (
    <>
      <MoviesContext.Provider value={movies}>
        <MoviesDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>
        </MoviesDispatchContext.Provider>
      </MoviesContext.Provider>
    </>
  );
}

export default App;
