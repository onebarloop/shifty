import { createTask } from "@/app/lib/actions";

export default function TaskForm({
  eventId,
}: {
  eventId: number;
}) {
  const createTaskWithId = createTask.bind(null, eventId);
  return (
    <form action={createTaskWithId}>
      <label htmlFor="name">Name</label>
      <input className="text-black" name="name" id="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
