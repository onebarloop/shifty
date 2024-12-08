"use server";

import { events, tasks } from "../db/schema";
import { db } from "../db/db";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function createEvent(formData: FormData) {
  const eventName = formData.get("name");
  if (eventName) {
    await db.insert(events).values({ name: eventName as string });
    revalidatePath("/");
  }
}

export async function createTask(eventId: number, formData: FormData) {
  const taskName = formData.get("name");
  if (taskName) {
    await db
      .insert(tasks)
      .values({ name: taskName as string, eventId: eventId });
    revalidatePath(`/[slug]`, 'page');
  }
}

export async function deleteTask(taskId: number) {
  await db.delete(tasks).where(eq(tasks.id, taskId));
  revalidatePath(`/[slug]`, 'page');
}
