import TaskListItem from "@/features/task/components/TaskListItem";

import { type Task } from "@/features/task/types";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
};

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} onToggleTask={onToggleTask} />
      ))}
    </div>
  );
}
