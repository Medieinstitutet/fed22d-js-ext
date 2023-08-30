import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { ActionType, IAction, TodosReducer } from "../reducers/TodosReducer";

export const TodoApp = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(TodosReducer, []);

  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // setTodos([...todos, new Todo(new Date().getTime(), userInput, false)]);

    const action: IAction<string> = {
      type: ActionType.ADDED,
      payload: userInput,
    };

    dispatch(action);

    setUserInput("");
  };

  const toggleTodo = (id: number) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === id) todo.done = !todo.done;
    //     return todo;
    //   })
    // );

    const action: IAction<number> = {
      type: ActionType.TOGGLED,
      payload: id,
    };

    dispatch(action);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUserInput(e.target.value);
          }}
        />
        <button>Spara</button>
      </form>
      <section>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              className={todo.done ? "done" : ""}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
