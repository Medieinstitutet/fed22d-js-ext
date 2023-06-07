import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import { ISrResponse } from "./models/ISrResponse";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<ISrResponse>(
        "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false"
      );

      console.log(response.data.programs);
    };

    getData();
  });

  return <></>;
}

export default App;
