import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function EditButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>To be implemented....</DialogTitle>
          <DialogDescription>Not ready yet!</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
