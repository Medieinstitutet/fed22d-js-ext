import { ChangeEvent, useState } from "react";

interface IAddTodoProps {
  addTodo: (text: string) => void;
}

export const AddTodo = ({ addTodo }: IAddTodoProps) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSave = () => {
    addTodo(userInput);
    setUserInput("");
  };

  return (
    <>
      <input value={userInput} onChange={handleChange} />
      <button onClick={handleSave}>Spara</button>
    </>
  );
};
