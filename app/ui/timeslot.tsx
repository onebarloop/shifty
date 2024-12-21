import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTimeslot } from '@/app/lib/actions';
import Member from '@/app/ui/member';
import MemberForm from '@/app/ui/forms/member-form';
import type { Timeslot } from '@/app/interfaces/interfaces';
import FormWrapper from '@/app/ui/forms/form-wrapper';

export default function Timeslot({ slot }: { slot: Timeslot }) {
  return (
    <>
      <li>
        <div className="flex gap-2">
          <span>
            {slot.from} - {slot.to}
          </span>
          <DeleteButton deleteItemAction={deleteTimeslot} id={slot.id} />
        </div>
        <ul>
          {slot.members.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </ul>
        <FormWrapper type="member" id={slot.id} />
      </li>
    </>
  );
}
