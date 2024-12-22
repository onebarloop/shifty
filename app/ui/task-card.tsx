import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Task } from '@/app/interfaces/interfaces';
import TimeslotTable from '@/app/ui/timeslot-table';
import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteTask } from '@/app/lib/actions';

export default function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h2 className="text-xl">{task.name}</h2>
          <DeleteButton deleteItemAction={deleteTask} id={task.id} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TimeslotTable slots={task.timeslots} taskId={task.id} />
      </CardContent>
    </Card>
  );
}
