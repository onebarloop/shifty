import DeleteButton from '@/app/ui/buttons/delete-button';
import Timeslot from '@/app/ui/timeslot';
import { deleteTask } from '@/app/lib/actions';
import type { Task } from '@/app/interfaces/interfaces';
import FormWrapper from '@/app/ui/forms/form-wrapper';

export default function Task({ task }: { task: Task }) {
  return (
    <li>
      <div className="flex gap-2">
        <span>{task.name}</span>
        <DeleteButton deleteItemAction={deleteTask} id={task.id} />
      </div>
      <ul className="ml-4 mb-2">
        {task.timeslots.map((slot) => (
          <Timeslot key={slot.id} slot={slot} />
        ))}
      </ul>
      <FormWrapper type="slot" id={task.id} />
    </li>
  );
}
