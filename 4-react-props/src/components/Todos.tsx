import { IFunctionsProps } from "../models/IFunctionsProps";
import { Todo } from "../models/Todo";
import { TodoView } from "./TodoView";

interface ITodosProps extends IFunctionsProps {
  todos: Todo[];
}

export const Todos = ({ todos, toggle, remove }: ITodosProps) => {
  const handleToggle = (id: number): void => {
    toggle(id);
  };

  const handleRemove = (id: number) => {
    remove(id);
  };

  const html = todos.map((todo) => (
    <TodoView
      remove={handleRemove}
      todo={todo}
      key={todo.id}
      toggle={handleToggle}
    ></TodoView>
  ));

  return <div>{html}</div>;
};
