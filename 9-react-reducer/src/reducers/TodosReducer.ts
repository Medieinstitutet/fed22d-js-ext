import { Todo } from "../models/Todo";

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export enum ActionType {
  ADDED,
  TOGGLED,
}

export const TodosReducer = <T>(todos: Todo[], action: IAction<T>) => {
  if (action.type === ActionType.ADDED) {
    const temp = action.payload as unknown;
    const convertedPayload = temp as string;
    return [...todos, new Todo(new Date().getTime(), convertedPayload, false)];
  }

  if (action.type === ActionType.TOGGLED) {
    return todos.map((todo) => {
      if (todo.id === +action.payload) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
  }

  return todos;
};
