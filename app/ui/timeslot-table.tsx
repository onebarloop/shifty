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
import { Button } from '@/components/ui/button';
import { Trash2, Pencil } from 'lucide-react';
import EditButton from '@/app/ui/buttons/edit-button';

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
            <TableHead className="sm:w-[100px]">Edit</TableHead>
            <TableHead className="sm:w-[100px]">Time</TableHead>
            <TableHead>People</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slots.map((slot) => (
            <TableRow key={slot.id}>
              <TableCell className="inline-flex flex-wrap gap-2">
                <DeleteButton deleteItemAction={deleteTimeslot} id={slot.id}>
                  <Button className="h-6 w-6" size="sm" variant="secondary">
                    <Trash2 />
                  </Button>
                </DeleteButton>
                <EditButton>
                  <Button className="h-6 w-6" size="sm" variant="secondary">
                    <Pencil />
                  </Button>
                </EditButton>
              </TableCell>
              <TableCell className="font-medium align">
                {slot.from}-{slot.to}
              </TableCell>
              <TableCell className="inline-flex flex-wrap gap-2">
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
