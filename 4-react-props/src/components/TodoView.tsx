import { IFunctionsProps } from "../models/IFunctionsProps";
import { Todo } from "../models/Todo";
import "./TodoView.css";

interface ITodoViewProps extends IFunctionsProps {
  todo: Todo;
}

export const TodoView = ({ todo, toggle, remove }: ITodoViewProps) => {
  const handleClick = () => {
    toggle(todo.id);
  };

  const handleRemove = () => {
    remove(todo.id);
  };

  return (
    <div>
      <h4 className={todo.done ? "done" : ""}>{todo.text}</h4>
      <button onClick={handleClick}>Toggla</button>
      <button onClick={handleRemove}>Ta bort</button>
    </div>
  );
};
