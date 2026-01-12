import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { type Task } from "@/features/task/types";

type CreateTaskFormProps = {
  onCreateTask: (task: Task) => void;
};

export default function CreateTaskForm({ onCreateTask }: CreateTaskFormProps) {
  const [form, setForm] = useState({ text: "", priority: 1 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "priority" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onCreateTask({ ...form, id: Date.now(), isCompleted: false });

    setForm({ text: "", priority: 1 });
  };

  const isDisabled = form.text.trim().length === 0 || form.priority < 1;

  return (
    <form
      className="flex flex-col md:flex-row md:items-center gap-4"
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

      <Button disabled={isDisabled}>Create Task</Button>
    </form>
  );
}
