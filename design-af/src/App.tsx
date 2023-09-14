import { DigiButton } from "@digi/arbetsformedlingen-react";
import "./App.css";
import "@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css";
import { ButtonVariation } from "@digi/arbetsformedlingen";

function App() {
  return (
    <>
      <DigiButton onAfOnClick={() => {}} afVariation={ButtonVariation.PRIMARY}>
        Spara
      </DigiButton>
    </>
  );
}

export default App;
