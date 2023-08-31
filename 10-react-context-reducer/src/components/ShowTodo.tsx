import { useContext } from "react";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";
import { Todo } from "../models/Todo";
import { ActionType } from "../reducers/TodosReducer";

interface IShowTodoProps {
  todo: Todo;
}

export const ShowTodo = ({ todo }: IShowTodoProps) => {
  const dispatch = useContext(TodosDispatchContext);

  const handleToggle = () => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: todo.id.toString(),
    });
  };

  return (
    <div className={todo.done ? "done" : ""}>
      <span onClick={handleToggle}>{todo.text}</span>
    </div>
  );
};
