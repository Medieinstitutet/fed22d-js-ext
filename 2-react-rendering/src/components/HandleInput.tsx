import { ChangeEvent } from "react";

export const HandleInput = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  );
};
