import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTimeslot } from '@/app/lib/actions';
import Member from '@/app/ui/member';
import type { Timeslot } from '@/app/interfaces/interfaces';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TimeslotForm from '@/app/ui/forms/timeslot-form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import AddMemberButton from '@/app/ui/buttons/add-member';

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
                  className="h-5"
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
                <AddMemberButton timeslotId={slot.id} />
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}>
              <Popover>
                <PopoverTrigger className="w-full">Add Timeslot</PopoverTrigger>
                <PopoverContent>
                  <TimeslotForm taskId={taskId} />
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
