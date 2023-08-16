import { ChangeEvent, FormEvent, useState } from "react";

interface ISearchProps {
  searchFunction: (text: string) => void;
}

export const Search = ({ searchFunction }: ISearchProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    searchFunction(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUserInput(e.target.value)
        }
      />
      <button>Sök</button>
    </form>
  );
};
