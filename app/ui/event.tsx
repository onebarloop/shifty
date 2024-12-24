import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteEvent } from '@/app/lib/actions';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function Event({
  name,
  uuid,
  id,
}: {
  name: string;
  uuid: string;
  id: number;
}) {
  return (
    <li className="flex gap-2">
      <Link href={`/${uuid}`}>{name}</Link>
      <DeleteButton deleteItemAction={deleteEvent} id={id}>
        <Button>
          <Trash2 />
        </Button>
      </DeleteButton>
    </li>
  );
}
