import { LucideArrowDownWideNarrow } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type TaskControlsProps = {
  isIncompleteOnly: boolean;
  onToggleIsIncompleteOnly: () => void;
};

export default function TaskControls({
  isIncompleteOnly,
  onToggleIsIncompleteOnly,
}: TaskControlsProps) {
  return (
    <div className="flex justify-end gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          id="incomplete"
          checked={isIncompleteOnly}
          onCheckedChange={onToggleIsIncompleteOnly}
        />
        <Label htmlFor="incomplete">Show only incomplete</Label>
      </div>

      <LucideArrowDownWideNarrow />
    </div>
  );
}
