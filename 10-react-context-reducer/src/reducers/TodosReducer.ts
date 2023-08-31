import { Todo } from "./../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  TOGGLED,
}

export const TodosReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case ActionType.ADDED: {
      return [...todos, new Todo(new Date().getTime(), action.payload, false)];
    }

    case ActionType.TOGGLED: {
      return todos.map((todo) => {
        if (todo.id === +action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    }

    default:
      return todos;
  }
};
