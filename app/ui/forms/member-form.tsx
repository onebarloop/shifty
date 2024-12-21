import { createMember } from '@/app/lib/actions';

export default function MemberForm({ timeslotId }: { timeslotId: number }) {
  const createTaskWithId = createMember.bind(null, timeslotId);
  return (
    <form action={createTaskWithId}>
      <label htmlFor="name">Add Member</label>
      <input className="text-black" name="name" id="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
