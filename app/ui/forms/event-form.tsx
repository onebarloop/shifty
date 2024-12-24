import { createEvent } from '@/app/lib/actions';

export default function EventForm() {
  return (
    <form className="flex flex-col gap-2" action={createEvent}>
      <label htmlFor="name">Add Event</label>
      <input name="name" id="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
