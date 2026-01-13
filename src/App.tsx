import { useState, useReducer } from "react";

import Title from "@/components/Title";
import CreateTaskForm from "@/features/task/components/CreateTaskForm";
import TaskList from "@/features/task/components/TaskList";

import taskReducer from "./features/task/reducers/taskReducer";
import { type Task } from "@/features/task/types";
import { getTasks } from "@/utils/localStorage";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, getTasks());
  const [isIncompleteOnly, setIsIncompleteOnly] = useState(false);

  const handleCreateTask = (task: Task) => {
    dispatch({ type: "CREATE", payload: task });
  };

  const handleUpdateTask = (id: number, text: string, priority: number) => {
    dispatch({ type: "UPDATE", payload: { id, text, priority } });
  };

  const handleDeleteTask = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleToggleTask = (id: number) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const handleSortTask = () => {
    dispatch({ type: "SORT" });
  };

  const handleToggleIsIncompleteOnly = () => {
    setIsIncompleteOnly((prevIsIncompleteOnly) => !prevIsIncompleteOnly);
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
        onSortTask={handleSortTask}
        onUpdateTask={handleUpdateTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
