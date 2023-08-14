import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Lorem", false, 1),
    new Todo("ipsum", false, 2),
  ]);

  const addTodo = (textFromUser: string): void => {
    setTodos([...todos, new Todo(textFromUser, false, Date.now())]);
  };

  const toggleTodo = (selectedId: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === selectedId) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  const removeTodo = (selectedId: number) => {
    setTodos(todos.filter((todo) => todo.id !== selectedId));
  };

  return (
    <>
      <AddTodo createTodo={addTodo}></AddTodo>
      <Todos
        todoList={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      ></Todos>
    </>
  );
}

export default App;
