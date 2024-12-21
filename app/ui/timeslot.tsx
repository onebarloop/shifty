import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTimeslot } from '@/app/lib/actions';
import Members from '@/app/ui/members';

export default function Timeslot({
  from,
  to,
  id,
  members,
}: {
  from: number;
  to: number;
  id: number;
  members: { id: number; name: string }[];
}) {
  return (
    <>
      <li className="flex gap-2">
        <span>
          {from} - {to}
        </span>
        <DeleteButton deleteItemAction={deleteTimeslot} id={id} />
      </li>
      <Members members={members} timeslotId={id} />
    </>
  );
}
