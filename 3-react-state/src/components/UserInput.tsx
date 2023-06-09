import { ChangeEvent, useState } from "react";

export const UserInput = () => {
  const [inputFromUser, setInputFromUser] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFromUser(e.target.value);
  };

  return (
    <>
      <input value={inputFromUser} onChange={handleChange} />
      <p>{inputFromUser}</p>
    </>
  );
};
