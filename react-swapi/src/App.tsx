import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import { IPerson } from "./models/IPerson";

function App() {
  let person: IPerson = {
    name: "",
    height: "",
    mass: "",
    homeworld: "",
    films: [],
    vehicles: [],
    starships: [],
    species: [],
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<IPerson>(
        "https://swapi.dev/api/people/1"
      );
      person = response.data;
      console.log(person);
    };

    getData();
  });

  return (
    <>
      <h3>{person.name}</h3>
    </>
  );
}

export default App;
