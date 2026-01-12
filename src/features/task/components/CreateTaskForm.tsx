import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { type Task } from "@/features/task/types";

type CreateTaskFormProps = {
  onCreateTask: (task: Task) => void;
};

export default function CreateTaskForm({ onCreateTask }: CreateTaskFormProps) {
  const [task, setTask] = useState({ text: "", priority: 1 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: name === "priority" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onCreateTask({ ...task, id: Date.now(), isCompleted: false });

    setTask({ text: "", priority: 1 });
  };

  const isDisabled = task.text.trim().length === 0 || task.priority < 1;

  return (
    <form
      className="flex flex-col md:flex-row md:items-center gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Enter new task"
        name="text"
        value={task.text}
        onChange={handleInputChange}
      />

      <Input
        type="number"
        placeholder="Enter new task"
        min={1}
        className="w-full md:w-50"
        name="priority"
        value={task.priority}
        onChange={handleInputChange}
      />

      <Button disabled={isDisabled}>Create Task</Button>
    </form>
  );
}
