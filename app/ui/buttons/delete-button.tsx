'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function DeleteButton({
  deleteItemAction,
  id,
  children
}: {
  deleteItemAction: (id: number) => Promise<void>;
  id: number;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
          <Button onClick={async () => deleteItemAction(id)}>Yes</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
