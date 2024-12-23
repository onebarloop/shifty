import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import MemberForm from '@/app/ui/forms/member-form';

export default function AddMemberButton({
  timeslotId,
}: {
  timeslotId: number;
}) {
  return (
    <Popover>
      <PopoverTrigger>+</PopoverTrigger>
      <PopoverContent>
        <MemberForm timeslotId={timeslotId} />
      </PopoverContent>
    </Popover>
  );
}
