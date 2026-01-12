import { LucidePencil, LucideTrash } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { type Task } from "@/features/task/types";

type TaskListItemProps = {
  task: Task;
};

export default function TaskListItem({ task }: TaskListItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 flex items-center gap-4">
        <Checkbox />

        <span className="break-all">{task.text}</span>

        <Badge variant="outline">{task.priority}</Badge>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="secondary" size="icon">
          <LucidePencil />
        </Button>

        <Button variant="destructive" size="icon">
          <LucideTrash />
        </Button>
      </div>
    </div>
  );
}
