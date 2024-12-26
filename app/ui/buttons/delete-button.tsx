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
import { useToast } from '@/hooks/use-toast';
import { Response } from '@/app/interfaces/interfaces';

export default function DeleteButton({
  deleteItemAction,
  id,
  children,
}: {
  deleteItemAction: (id: number) => Promise<Response>;
  id: number;
  children: React.ReactNode;
}) {
  const { toast } = useToast();

  const deleteAction = async () => {
    const res = await deleteItemAction(id);
    toast({ description: res.message });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
          <Button onClick={deleteAction}>Yes</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
