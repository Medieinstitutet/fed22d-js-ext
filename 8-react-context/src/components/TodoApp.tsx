import { useState } from "react";
import { ITodosContext, TodosContext } from "../contexts/TodosContext";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<ITodosContext>({
    todos: [new Todo(new Date().getTime(), "Start", false)],
    add: (text: string) => {},
    toggle: (id: number) => {},
  });

  todos.add = (text: string) => {
    setTodos({
      ...todos,
      todos: [...todos.todos, new Todo(new Date().getTime(), text, false)],
    });
  };

  todos.toggle = (id: number) => {
    setTodos({
      ...todos,
      todos: todos.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      }),
    });
  };

  return (
    <>
      <TodosContext.Provider value={todos}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </>
  );
};
