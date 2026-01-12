import { useState } from "react";
import { LucideCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { type Task } from "@/features/task/types";

type UpdateTaskFormProps = {
  task: Task;
  onUpdateTask: (id: number, text: string, priority: number) => void;
};

export default function UpdateTaskForm({
  task,
  onUpdateTask,
}: UpdateTaskFormProps) {
  const [form, setForm] = useState({
    text: task.text,
    priority: task.priority,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "priority" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onUpdateTask(task.id, form.text, form.priority);
  };

  const isDisabled = form.text.trim().length === 0 || form.priority < 1;

  return (
    <form
      className="flex flex-col md:flex-row md:items-center gap-4 py-2"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Enter new task"
        name="text"
        value={form.text}
        onChange={handleInputChange}
      />

      <Input
        type="number"
        placeholder="Enter new task"
        min={1}
        className="w-full md:w-50"
        name="priority"
        value={form.priority}
        onChange={handleInputChange}
      />

      <Button className="w-full md:w-22" size="icon" disabled={isDisabled}>
        <LucideCheck />
      </Button>
    </form>
  );
}
