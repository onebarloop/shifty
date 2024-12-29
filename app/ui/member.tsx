'use client';

import type { Member } from '@/app/interfaces/interfaces';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import EditMemberForm from '@/app/ui/forms/edit-member-form';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import MemberForm from '@/app/ui/forms/member-form';

export default function Member({ member }: { member: Member }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogTrigger asChild>
      <Button className="p-0 h-fit hover:bg-white">
        <Badge>{member.name}</Badge>
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit member</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        Change settings
      </DialogDescription>
      <EditMemberForm closeForm={() => setIsOpen(false)} member={member} />
    </DialogContent>
  </Dialog>
  );
}
