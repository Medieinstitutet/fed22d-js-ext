import { Todo } from "./../models/Todo";
import { createContext } from "react";

export const TodosContext = createContext<Todo[]>([]);
