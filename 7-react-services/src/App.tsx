import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { Search } from "./components/Search";
import { IMovie } from "./models/IMovie";
import { searchMovies } from "./services/movieService";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const search = async (userInput: string) => {
    setMovies(await searchMovies(userInput));
  };

  return (
    <>
      <Search searchFunction={search}></Search>
      <Movies movies={movies}></Movies>
    </>
  );
}

export default App;
