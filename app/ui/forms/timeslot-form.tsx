import { createTimeslot } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function TimeslotForm({ taskId }: { taskId: number }) {
  const createTimeslotWithId = createTimeslot.bind(null, taskId);
  return (
    <form action={createTimeslotWithId}>
      <Label htmlFor="from">From</Label>
      <Input className="text-black" name="from" id="from" type="number" />
      <Label htmlFor="to">To</Label>
      <Input className="text-black" name="to" id="to" type="number" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
