import "./App.css";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { HelloWorld } from "./components/HelloWorld";
import { Interpolation } from "./components/Interpolation";
import { Lists } from "./components/Lists";

function App() {
  return (
    <>
      <HelloWorld></HelloWorld>
      <Interpolation></Interpolation>
      <ConditionalRendering></ConditionalRendering>
      <Lists></Lists>
    </>
  );
}

export default App;
