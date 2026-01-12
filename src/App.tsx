import { useState, useEffect } from "react";

import Title from "@/components/Title";
import CreateTaskForm from "@/features/task/components/CreateTaskForm";
import TaskList from "@/features/task/components/TaskList";

import { type Task } from "@/features/task/types";
import {
  getTasks as getStoredTasks,
  setTasks as setStoredTasks,
} from "./utils/localStorage";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(getStoredTasks());
  const [isIncompleteOnly, setIsIncompleteOnly] = useState(false);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  const handleCreateTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleToggleIsIncompleteOnly = () => {
    setIsIncompleteOnly((prevIsIncompleteOnly) => !prevIsIncompleteOnly);
  };

  const handleSortByPriority = () => {
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) => a.priority - b.priority)
    );
  };

  const handleUpdateTask = (id: number, text: string, priority: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text, priority } : task
      )
    );
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = isIncompleteOnly
    ? tasks.filter((task) => !task.isCompleted)
    : tasks;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <Title />

      <CreateTaskForm onCreateTask={handleCreateTask} />

      <TaskList
        tasks={filteredTasks}
        isIncompleteOnly={isIncompleteOnly}
        onToggleIsIncompleteOnly={handleToggleIsIncompleteOnly}
        onSortByPriority={handleSortByPriority}
        onUpdateTask={handleUpdateTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
