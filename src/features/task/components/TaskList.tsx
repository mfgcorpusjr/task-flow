import { useState } from "react";

import TaskListItem from "@/features/task/components/TaskListItem";
import UpdateTaskForm from "@/features/task/components/UpdateTaskForm";

import { type Task } from "@/features/task/types";

type TaskListProps = {
  tasks: Task[];
  onUpdateTask: (id: number, text: string, priority: number) => void;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export default function TaskList({
  tasks,
  onUpdateTask,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  const [selectedTask, setSelectedTask] = useState<Task>();

  const handleUpdateTask = (id: number, text: string, priority: number) => {
    onUpdateTask(id, text, priority);
    setSelectedTask(undefined);
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) =>
        task.id === selectedTask?.id ? (
          <UpdateTaskForm
            key={task.id}
            task={task}
            onUpdateTask={handleUpdateTask}
          />
        ) : (
          <TaskListItem
            key={task.id}
            task={task}
            onSelectTask={() => setSelectedTask(task)}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        )
      )}
    </div>
  );
}
