import { type Task } from "@/features/task/types";

export const TASKS: Task[] = [
  { id: 1, text: "Finish project proposal", priority: 1, isCompleted: false },
  { id: 2, text: "Review pull requests", priority: 2, isCompleted: true },
  { id: 3, text: "Update task app UI", priority: 3, isCompleted: false },
  { id: 4, text: "Fix login validation bug", priority: 4, isCompleted: true },
  { id: 5, text: "Write unit tests", priority: 5, isCompleted: false },
  { id: 6, text: "Plan next sprint", priority: 6, isCompleted: true },
  {
    id: 7,
    text: "Refactor task list component",
    priority: 7,
    isCompleted: false,
  },
  { id: 8, text: "Update documentation", priority: 8, isCompleted: true },
  { id: 9, text: "Deploy latest build", priority: 9, isCompleted: false },
  {
    id: 10,
    text: "Prepare weekly progress report",
    priority: 10,
    isCompleted: true,
  },
];
