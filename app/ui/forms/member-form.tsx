import { createMember } from '@/app/lib/actions';

export default function MemberForm({
  id,
  onSubmit,
}: {
  id: number;
  onSubmit: () => void;
}) {
  const createTaskWithId = createMember.bind(null, id);
  return (
    <form action={createTaskWithId} onSubmit={onSubmit}>
      <label htmlFor="name">Add Member</label>
      <input className="text-black" name="name" id="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
