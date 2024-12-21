import DeleteButton from '@/app/ui/buttons/delete-button';
import Timeslot from '@/app/ui/timeslots';
import { deleteTask } from '@/app/lib/actions';
import TimeslotForm from '@/app/ui/forms/timeslot-form';

export default function Task({
  name,
  id,
  timeslots,
}: {
  name: string;
  id: number;
  timeslots: { id: number; from: number; to: number }[];
}) {
  return (
    <li>
      <div className="flex gap-2">
        <span>{name}</span>
        <DeleteButton deleteItemAction={deleteTask} id={id} />
      </div>

      <ul className="ml-4">
        {timeslots.map((slot) => (
          <Timeslot key={slot.id} from={slot.from} to={slot.to} id={slot.id} />
        ))}
        <TimeslotForm taskId={id} />
      </ul>
    </li>
  );
}
