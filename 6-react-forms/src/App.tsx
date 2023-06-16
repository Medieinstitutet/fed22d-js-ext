import "./App.scss";
import { IceCreamForm } from "./components/IceCreamForm";
import { IceCream } from "./models/iceCream";

function App() {
  const handleIceCreamSave = (iceCream: IceCream) => {
    console.log("Received icecream: ", iceCream);
  };

  return (
    <>
      <IceCreamForm handleSave={handleIceCreamSave}></IceCreamForm>
    </>
  );
}

export default App;
