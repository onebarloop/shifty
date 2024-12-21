import { getEventData } from '@/app/db/query';
import TaskForm from '@/app/ui/forms/task-form';
import Task from '@/app/ui/task';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const event = await getEventData(slug);

  if (event)
    return (
      <>
        <div>Event: {event.name}</div>
        <ul className="mb-12">
          {event.tasks.map((task) => (
            <Task key={task.id} name={task.name!} id={task.id} timeslots={task.timeslots} />
          ))}
        </ul>
        <TaskForm eventId={event.id} />
      </>
    );
}
