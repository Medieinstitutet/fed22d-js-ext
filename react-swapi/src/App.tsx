import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { IPerson } from "./models/IPerson";

function App() {
  const [person, setPerson] = useState<IPerson>({
    name: "",
    height: "",
    mass: "",
    homeworld: "",
    films: [],
    vehicles: [],
    starships: [],
    species: [],
  });
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (person.name !== "") return;

    const getData = async () => {
      const response = await axios.get<IPerson>(
        "https://swapi.dev/api/people/1"
      );
      setPerson(response.data);
      console.log(person);
    };

    getData();
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSearch = async () => {
    const response = await axios.get<IPerson>(
      `https://swapi.dev/api/people/${userInput}`
    );
    setPerson(response.data);
  };

  return (
    <>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={handleSearch}>Sök</button>
      <h3>{person.name}</h3>
    </>
  );
}

export default App;
