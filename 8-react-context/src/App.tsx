import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { TodoApp } from "./components/TodoApp";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.light);

  const handleClick = () => {
    console.log("Du klickade");
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {/* <ShowMessage /> */}
        {/* <button onClick={handleClick}>Ändra message</button> */}
        <Button click={handleClick}>
          {<>Byt till {theme === themes.light ? "Dark" : "Light"}</>}
        </Button>

        <TodoApp />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
