import { type Task } from "@/features/task/types";
import { setTasks } from "@/utils/localStorage";

type State = Task[];

type CreateAction = {
  type: "CREATE";
  payload: Task;
};

type UpdateAction = {
  type: "UPDATE";
  payload: { id: number; text: string; priority: number };
};

type DeleteAction = {
  type: "DELETE";
  payload: number;
};

type ToggleAction = {
  type: "TOGGLE";
  payload: number;
};

type SortAction = {
  type: "SORT";
};

type Action =
  | CreateAction
  | UpdateAction
  | DeleteAction
  | ToggleAction
  | SortAction;

const taskReducer = (state: State, action: Action) => {
  let updatedTasks: Task[] = [];

  switch (action.type) {
    case "CREATE":
      updatedTasks = [...state, action.payload];
      break;

    case "UPDATE":
      const { id, text, priority } = action.payload;
      updatedTasks = state.map((task) =>
        task.id === id ? { ...task, text, priority } : task
      );
      break;

    case "DELETE":
      updatedTasks = state.filter((task) => task.id !== action.payload);
      break;

    case "TOGGLE":
      updatedTasks = state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
      break;

    case "SORT":
      updatedTasks = [...state].sort((a, b) => a.priority - b.priority);
      break;

    default:
      updatedTasks = state;
  }

  setTasks(updatedTasks);
  return updatedTasks;
};

export default taskReducer;
