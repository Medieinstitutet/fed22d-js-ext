import { Todo } from "../models/Todo";
import { ShowTodo } from "./ShowTodo";
import "./Todos.css";

interface ITodosProps {
  todoList: Todo[];
  toggleTodo: (selectedId: number) => void;
  removeTodo: (selectedId: number) => void;
}

export const Todos = ({ todoList, toggleTodo, removeTodo }: ITodosProps) => {
  const lis = todoList.map((todo, i) => (
    <li key={i}>
      <ShowTodo todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </li>
  ));

  return <ul>{lis}</ul>;
};
