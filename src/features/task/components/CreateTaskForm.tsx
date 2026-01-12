import { useState } from "react";

import { Label } from "@/components/ui/label";
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
      className="flex flex-col md:flex-row md:items-end gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex-1 space-y-2">
        <Label htmlFor="text">Text</Label>
        <Input
          type="text"
          placeholder="Enter new task"
          id="text"
          name="text"
          value={form.text}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full md:w-50 space-y-2">
        <Label htmlFor="priority">Priority</Label>
        <Input
          type="number"
          placeholder="Enter new task"
          min={1}
          id="priority"
          name="priority"
          value={form.priority}
          onChange={handleInputChange}
        />
      </div>

      <Button disabled={isDisabled}>Create Task</Button>
    </form>
  );
}
