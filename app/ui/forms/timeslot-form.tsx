import { createTimeslot } from '@/app/lib/actions';

export default function TimeslotForm({
  id,
  onSubmit,
}: {
  id: number;
  onSubmit: () => void;
}) {
  const createTimeslotWithId = createTimeslot.bind(null, id);

  return (
    <form action={createTimeslotWithId} onSubmit={onSubmit}>
      <label htmlFor="from">From</label>
      <input className="text-black" name="from" id="from" type="number" />
      <label htmlFor="to">To</label>
      <input className="text-black" name="to" id="to" type="number" />
      <button type="submit">Submit</button>
    </form>
  );
}
