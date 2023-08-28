import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { add } = useContext(TodosContext);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    add(userInput);

    setUserInput("");
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        value={userInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUserInput(e.target.value);
        }}
      />
      <Button click={() => {}}>
        <>Spara</>
      </Button>
    </form>
  );
};
