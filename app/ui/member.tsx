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

export default function Member({ member }: { member: Member }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button className="p-0 h-fit hover:bg-white">
          <Badge>{member.name}</Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <EditMemberForm closeForm={() => setIsOpen(false)} member={member} />
      </PopoverContent>
    </Popover>
  );
}
