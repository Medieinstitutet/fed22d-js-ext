import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { IProgram } from "./models/IProgram";
import { ISrResponse } from "./models/ISrResponse";

function App() {
  const [programs, setPrograms] = useState<IProgram[]>([]);

  useEffect(() => {
    if (programs.length > 0) return;

    const getData = async () => {
      const response = await axios.get<ISrResponse>(
        "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false"
      );

      console.log(response.data.programs);
      setPrograms(response.data.programs);
    };

    getData();
  });

  const html = programs.map((program) => (
    <div key={program.id}>
      <h4>{program.name}</h4>
      <div>
        <img src={program.programimage} alt={program.name} />
      </div>
      <button>Läs mer...</button>
    </div>
  ));

  return <>{html}</>;
}

export default App;
