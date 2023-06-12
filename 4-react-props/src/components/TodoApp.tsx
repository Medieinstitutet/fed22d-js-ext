import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  const addTodo = (text: string) => {
    setTodos([...todos, new Todo(text, false, new Date().getTime())]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos remove={removeTodo} todos={todos} toggle={handleToggle}></Todos>
    </>
  );
};
