import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { ShowTodo } from "./ShowTodo";

export const Todos = () => {
  const todos = useContext(TodosContext);

  return (
    <div>
      {todos.map((todo) => (
        <ShowTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
