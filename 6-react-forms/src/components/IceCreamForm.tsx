import { useState, ChangeEvent, FormEvent } from "react";
import { IceCream } from "../models/iceCream";

interface IIceCreamFormProps {
  handleSave: (iceCream: IceCream) => void;
}

export const IceCreamForm = ({ handleSave }: IIceCreamFormProps) => {
  const [iceCream, setIceCream] = useState<IceCream>({
    name: "Daimstrut",
    price: 0,
    description: "",
    cone: false,
    howTodo: {
      step1: "",
      step2: "",
      step3: "",
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    if (e.target.type === "number") {
      setIceCream({ ...iceCream, [name]: +e.target.value }); // + -> 0 + "10" -> 10
    } else if (e.target.type === "checkbox") {
      setIceCream({ ...iceCream, [name]: e.target.checked });
    } else {
      setIceCream({ ...iceCream, [name]: e.target.value });
    }
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setIceCream({
      ...iceCream,
      howTodo: { ...iceCream.howTodo, [name]: e.target.value },
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSave(iceCream);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={iceCream.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        value={iceCream.price}
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        value={iceCream.description}
        onChange={handleChange}
        name="description"
      />
      <input
        type="checkbox"
        checked={iceCream.cone}
        onChange={handleChange}
        name="cone"
      />
      <hr />
      <input
        type="text"
        value={iceCream.howTodo.step1}
        onChange={handleTodoChange}
        name="step1"
      />
      <input
        type="text"
        value={iceCream.howTodo.step2}
        onChange={handleTodoChange}
        name="step2"
      />
      <input
        type="text"
        value={iceCream.howTodo.step3}
        onChange={handleTodoChange}
        name="step3"
      />
      <button>Spara</button>
      <p>{JSON.stringify(iceCream)}</p>
    </form>
  );
};
