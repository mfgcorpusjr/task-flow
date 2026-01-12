import { LucideListTodo } from "lucide-react";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";

export default function EmptyTask() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <LucideListTodo className="text-primary" />
        </EmptyMedia>
        <EmptyTitle>No tasks yet</EmptyTitle>
        <EmptyDescription>
          You don’t have any tasks right now. Create your first task to get
          started.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
