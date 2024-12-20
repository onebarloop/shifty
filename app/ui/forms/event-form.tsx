import { createEvent } from '@/app/lib/actions';

export default function EventForm() {
  return (
    <form action={createEvent}>
      <label htmlFor="name">Name</label>
      <input className="text-black" name="name" id="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
