import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTimeslot } from '@/app/lib/actions';
import Member from '@/app/ui/member';
import MemberForm from '@/app/ui/forms/member-form';
import type { Timeslot } from '@/app/interfaces/interfaces';
import PopoverForm from '@/app/ui/forms/popover-form';

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
        <PopoverForm text="Add Member">
          <MemberForm timeslotId={slot.id} />
        </PopoverForm>
      </li>
    </>
  );
}
