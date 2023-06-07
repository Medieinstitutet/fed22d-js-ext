import { IBoat } from "../models/IBoat";

export const ObjectPresentation = () => {
  const boat: IBoat = {
    name: "Albatross",
    type: "Segelbåt",
    engine: true,
    color: "Vit",
    length: 36,
    sail: "Spinnackar, Genua, Storsegel",
  };

  const handleClick = () => {
    console.log("Du köpte båten: ", boat.name);
  };

  const handleChange = () => {
    boat.engine = !boat.engine;
    console.log("Du klickade på engine", boat.engine);
  };

  return (
    <>
      <h3>{boat.name}</h3>
      Motor:
      <input type="checkbox" checked={boat.engine} onChange={handleChange} />
      {boat.type === "Segelbåt" ? (
        <span>{boat.length} fot</span>
      ) : (
        <h2>{boat.color}</h2>
      )}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Köp
      </button>
    </>
  );
};
