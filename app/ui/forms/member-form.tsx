import { createMember } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function MemberForm({ timeslotId }: { timeslotId: number }) {
  const createTaskWithId = createMember.bind(null, timeslotId);
  return (
    <form action={createTaskWithId}>
      <Label htmlFor="name">Add Member</Label>
      <Input name="name" id="name" type="text" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
