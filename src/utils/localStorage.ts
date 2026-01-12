import { type Task } from "@/features/task/types";
import { TASKS } from "@/features/task/data";

export const getTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : TASKS;
};

export const setTasks = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
