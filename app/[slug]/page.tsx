import { getEventData } from '@/app/db/query';
import TaskForm from '@/app/ui/forms/task-form';
import TaskCard from '@/app/ui/task-card';

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
        <h1 className="text-2xl font-bold underline mb-4">
          Event: {event.name}
        </h1>
        <div className="flex flex-col gap-2">
          {event.tasks.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
          <TaskForm eventId={event.id} />
        </div>
      </>
    );
  else return <div>Event not found</div>;
}
