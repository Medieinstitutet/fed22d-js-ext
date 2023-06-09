import { ChangeEvent, useState } from "react";
import { Dog } from "../models/Dog";

export const ObjectsInState = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [color, setColor] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRace(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleClick = () => {
    setDogs([...dogs, new Dog(name, race, color, false)]);
  };

  const handleVaccinate = (name: string) => {
    setDogs(
      dogs.map((dog) => {
        if (dog.name === name) {
          return { ...dog, isVaccinated: true };
        } else {
          return dog;
        }
      })
    );
  };

  const handleRemove = (name: string) => {
    setDogs(dogs.filter((dog) => dog.name !== name));
  };

  const html = dogs.map((dog) => (
    <div>
      <h3>{dog.name}</h3>
      <input type="checkbox" checked={dog.isVaccinated} />
      {!dog.isVaccinated && (
        <button onClick={() => handleVaccinate(dog.name)}>Vaccinera</button>
      )}
      <button onClick={() => handleRemove(dog.name)}>Ta bort från lista</button>
    </div>
  ));

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
        <input value={race} onChange={handleRaceChange} />
        <input value={color} onChange={handleColorChange} />
        <button onClick={handleClick}>Spara</button>
      </div>
      {html}
    </>
  );
};
