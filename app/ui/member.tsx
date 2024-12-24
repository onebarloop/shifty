import type { Member } from '@/app/interfaces/interfaces';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import EditMemberForm from '@/app/ui/forms/edit-member-form';

export default function Member({ member }: { member: Member }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-0 h-fit hover:bg-white">
          <Badge>{member.name}</Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <EditMemberForm member={member} />
      </PopoverContent>
    </Popover>
  );
}
