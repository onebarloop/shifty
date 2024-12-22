import { createMember } from '@/app/lib/actions';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function MemberForm({ timeslotId }: { timeslotId: number }) {
  const createTaskWithId = createMember.bind(null, timeslotId);
  return (
    <form action={createTaskWithId}>
      <Label htmlFor="name">Add Member</Label>
      <Input name="name" id="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
