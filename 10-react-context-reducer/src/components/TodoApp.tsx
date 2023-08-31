import { useReducer } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";
import { TodosReducer } from "../reducers/TodosReducer";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <>
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <AddTodo />
          <Todos />
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
};
