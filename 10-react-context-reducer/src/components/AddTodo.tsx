import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";
import { ActionType } from "../reducers/TodosReducer";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useContext(TodosDispatchContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED,
      payload: userInput,
    });

    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUserInput(e.target.value);
        }}
      />
      <button>Spara</button>
    </form>
  );
};
