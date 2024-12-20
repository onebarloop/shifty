import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTask } from '@/app/lib/actions';

export default function Task({ name, id }: { name: string; id: number }) {
  return (
    <li className="flex gap-2">
      <span>{name}</span>
      <DeleteButton deleteItemAction={deleteTask} id={id} />
    </li>
  );
}
