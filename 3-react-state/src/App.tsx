import { useState } from "react";
import "./App.css";
import { ObjectInState } from "./components/ObjectInState";
import { ObjectsInState } from "./components/ObjectsInState";
import { UserInput } from "./components/UserInput";

function App() {
  const [name, setName] = useState("Sebastian");

  const handleClick = () => {
    setName("Hanna");
  };

  console.log(name);

  return (
    <>
      {/* <h3 onClick={handleClick}>{name}</h3>
      <UserInput></UserInput>
      <ObjectInState></ObjectInState> */}
      <ObjectsInState></ObjectsInState>
    </>
  );
}

export default App;
