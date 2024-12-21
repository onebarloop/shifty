import { createTimeslot } from '@/app/lib/actions';

export default function TimeslotForm({ taskId }: { taskId: number }) {
  const createTimeslotWithId = createTimeslot.bind(null, taskId);
  return (
    <form action={createTimeslotWithId}>
      <label htmlFor="from">From</label>
      <input className="text-black" name="from" id="from" type="number" />
      <label htmlFor="to">To</label>
      <input className="text-black" name="to" id="to" type="number" />
      <button type="submit">Submit</button>
    </form>
  );
}