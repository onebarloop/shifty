'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import TimeslotForm from '@/app/ui/forms/timeslot-form';
import { useState } from 'react';

export default function AddTimeslotButton({ taskId }: { taskId: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full">Add timeslot</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add timeslot</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Add a timeslot to the selected shift
        </DialogDescription>
        <TimeslotForm closeDialog={() => setIsOpen(false)} taskId={taskId} />
      </DialogContent>
    </Dialog>
  );
}
