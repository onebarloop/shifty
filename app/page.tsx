import EventForm from './ui/forms/event-form';
import { getAllEvents } from '@/app/db/query';
import Event from '@/app/ui/event';

export default async function Home() {
  const data = await getAllEvents();
  return (
    <>
      <ul className="flex flex-col gap-2 mb-12">
        {data.map((item) => (
          <Event
            key={item.id}
            name={item.name!}
            uuid={item.uuid}
            id={item.id}
          />
        ))}
      </ul>
      <EventForm />
    </>
  );
}
