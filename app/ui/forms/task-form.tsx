import { createTask } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function TaskForm({ eventId }: { eventId: number }) {
  const createTaskWithId = createTask.bind(null, eventId);
  return (
    <form
      action={createTaskWithId}
      className="inline-flex w-fit flex-col mx-auto items-center gap-2"
    >
      <Label htmlFor="name">Add Task</Label>
      <Input name="name" id="name" type="text" />
      <Button className="w-full" type="submit">
        Add Task
      </Button>
    </form>
  );
}
