"use client";

import { deleteTask } from "@/app/lib/actions";

export default function DeleteButton({ id }: { id: number }) {
  return <button onClick={async () => await deleteTask(id)}>X</button>;
}
