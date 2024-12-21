import DeleteButton from '@/app/ui/buttons/delete-button';
import {deleteTimeslot} from '@/app/lib/actions';

export default function Timeslot({ from, to, id }: { from: number; to: number, id: number }) {
  return (
    <li className="flex gap-2">
      <span>{from} - {to}</span>
      <DeleteButton deleteItemAction={deleteTimeslot} id={id} />
    </li>
  );
}
