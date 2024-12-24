import { createTimeslot } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function TimeslotForm({ taskId }: { taskId: number }) {
  const createTimeslotWithId = createTimeslot.bind(null, taskId);
  return (
    <form className="flex flex-col gap-2" action={createTimeslotWithId}>
      <Label htmlFor="from">From</Label>
      <Input name="from" id="from" type="number" />
      <Label htmlFor="to">To</Label>
      <Input name="to" id="to" type="number" />
      <Button type="submit">Add Timeslot</Button>
    </form>
  );
}
