import { LucidePencil, LucideTrash } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { type Task } from "@/features/task/types";

type TaskListItemProps = {
  task: Task;
  onSelectTask: () => void;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export default function TaskListItem({
  task,
  onSelectTask,
  onToggleTask,
  onDeleteTask,
}: TaskListItemProps) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="flex-1 flex items-center gap-4">
        <Checkbox
          checked={task.isCompleted}
          onCheckedChange={() => onToggleTask(task.id)}
        />

        <span className="break-all">{task.text}</span>

        <Badge variant="outline">{task.priority}</Badge>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onSelectTask}>
          <LucidePencil />
        </Button>

        <Button
          variant="destructive"
          size="icon"
          onClick={() => onDeleteTask(task.id)}
        >
          <LucideTrash />
        </Button>
      </div>
    </div>
  );
}
