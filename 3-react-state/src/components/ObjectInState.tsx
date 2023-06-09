import { useState } from "react";
import { Dog } from "../models/Dog";

export const ObjectInState = () => {
  const [dog, setDog] = useState<Dog>(
    new Dog("Nala", "Leonberger", "Yellow", false)
  );

  const handleClick = () => {
    setDog({ ...dog, isVaccinated: true });
  };

  return (
    <>
      <h3>{dog.name}</h3>
      <input type="checkbox" checked={dog.isVaccinated} />
      {!dog.isVaccinated && <button onClick={handleClick}>Vaccinera</button>}
    </>
  );
};
