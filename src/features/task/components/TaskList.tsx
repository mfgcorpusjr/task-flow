import TaskListItem from "@/features/task/components/TaskListItem";

import { type Task } from "@/features/task/types";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export default function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
