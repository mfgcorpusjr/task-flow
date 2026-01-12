import { useState } from "react";

import Title from "@/components/Title";
import CreateTaskForm from "@/features/task/components/CreateTaskForm";
import TaskList from "@/features/task/components/TaskList";

import { type Task } from "@/features/task/types";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <Title />

      <CreateTaskForm onCreateTask={handleCreateTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
