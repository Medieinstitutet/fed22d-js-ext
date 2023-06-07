import { IBoat } from "../models/IBoat";

export const ObjectsPresentation = () => {
  const boats: IBoat[] = [
    {
      name: "Albatross",
      type: "Segelbåt",
      engine: true,
      color: "Vit",
      length: 36,
      sail: "Spinnackar, Genua, Storsegel",
    },
    {
      name: "Wasa",
      type: "Segelbåt",
      engine: false,
      color: "Trä",
      length: 100,
      sail: "Jättemånga",
    },
  ];

  const handleClick = (boat: IBoat) => {
    console.log("Du köpte båten: ", boat.name);
  };

  const handleChange = (boat: IBoat) => {
    boat.engine = !boat.engine;
    console.log("Du klickade på engine", boat.engine);
  };

  const html = boats.map((boat) => {
    return (
      <div key={boat.name}>
        <h3>{boat.name}</h3>
        Motor:
        <input
          type="checkbox"
          checked={boat.engine}
          onChange={() => {
            handleChange(boat);
          }}
        />
        {boat.type === "Segelbåt" ? (
          <span>{boat.length} fot</span>
        ) : (
          <h2>{boat.color}</h2>
        )}
        <button
          onClick={() => {
            handleClick(boat);
          }}
        >
          Köp
        </button>
      </div>
    );
  });

  return <>{html}</>;
};
