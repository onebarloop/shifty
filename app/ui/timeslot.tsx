import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTimeslot } from '@/app/lib/actions';
import Member from '@/app/ui/member';
import MemberForm from '@/app/ui/forms/member-form';

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
      <li>
        <div className="flex gap-2">
          <span>
            {from} - {to}
          </span>
          <DeleteButton deleteItemAction={deleteTimeslot} id={id} />
        </div>
        <ul>
          {members.map((member) => (
            <Member key={member.id} name={member.name} />
          ))}
        </ul>
        <MemberForm timeslotId={id} />
      </li>
    </>
  );
}
