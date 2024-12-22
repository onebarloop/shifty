import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTimeslot } from '@/app/lib/actions';
import Member from '@/app/ui/member';
import MemberForm from '@/app/ui/forms/member-form';
import type { Timeslot } from '@/app/interfaces/interfaces';
import PopoverForm from '@/app/ui/forms/popover-form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TimeslotForm from '@/app/ui/forms/timeslot-form';

export default function TimeslotTable({
  slots,
  taskId,
}: {
  slots: Timeslot[];
  taskId: number;
}) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead className="w-[200px]">Time</TableHead>
            <TableHead>People</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slots.map((slot) => (
            <TableRow key={slot.id}>
              <TableCell>
                <DeleteButton
                  className="h-6 "
                  deleteItemAction={deleteTimeslot}
                  id={slot.id}
                />
              </TableCell>
              <TableCell className="font-medium">
                {slot.from}-{slot.to}
              </TableCell>
              <TableCell className="flex gap-2">
                {slot.members.map((member) => (
                  <Member key={member.id} member={member} />
                ))}
                <PopoverForm className="opacity-50" text="+">
                  <MemberForm timeslotId={slot.id} />
                </PopoverForm>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}>
              <PopoverForm className="w-full" text="Add Timeslot">
                <TimeslotForm taskId={taskId} />
              </PopoverForm>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
