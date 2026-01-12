import { LucideListTodo } from "lucide-react";

export default function Title() {
  return (
    <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
      <LucideListTodo className="text-primary" />
      Task Flow
    </h1>
  );
}
