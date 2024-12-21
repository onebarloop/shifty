import { createEvent } from '@/app/lib/actions';

export default function EventForm() {
  return (
    <form action={createEvent}>
      <label htmlFor="name">Add Event</label>
      <input className="text-black" name="name" id="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
