'use client';
import { Button } from '@/components/ui/button';

export default function DeleteButton({
  deleteItemAction,
  id,
  className,
}: {
  deleteItemAction: (id: number) => Promise<void>;
  id: number;
  className?: string;
}) {
  return <Button className={className} onClick={async () => deleteItemAction(id)}>X</Button>;
}
