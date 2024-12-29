'use client';

import MemberForm from '@/app/ui/forms/member-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

export default function AddMemberButton({
  timeslotId,
}: {
  timeslotId: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>+</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Member</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Add a member to the selected shift
        </DialogDescription>
        <MemberForm
          closeDialog={() => setIsOpen(false)}
          timeslotId={timeslotId}
        />
      </DialogContent>
    </Dialog>
  );
}
