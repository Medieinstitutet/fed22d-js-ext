import { ChangeEvent, FormEvent, useState } from "react";

interface IAddTodoProps {
  createTodo: (textFromUser: string) => void;
}

export const AddTodo = ({ createTodo }: IAddTodoProps) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();

    createTodo(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input type="text" onChange={handleChange} value={userInput} />
      <button>Spara</button>
    </form>
  );
};
