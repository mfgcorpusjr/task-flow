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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <Title />

      <CreateTaskForm onCreateTask={handleCreateTask} />

      <TaskList tasks={tasks} />
    </div>
  );
}
