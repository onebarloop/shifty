import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Task } from '@/app/interfaces/interfaces';
import TimeslotTable from '@/app/ui/timeslot-table';
import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTask } from '@/app/lib/actions';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="py-2.5 px-4 relative">
        <DeleteButton deleteItemAction={deleteTask} id={task.id}>
          <Button className="absolute top-0 right-0" size="icon">
            <Trash2 />
          </Button>
        </DeleteButton>
        <CardTitle className="">
          <h2 className="text-xl">{task.name}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-2.5">
        <TimeslotTable slots={task.timeslots} taskId={task.id} />
      </CardContent>
    </Card>
  );
}
