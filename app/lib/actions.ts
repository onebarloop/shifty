'use server';

import { events, tasks, timeslots } from '../db/schema';
import { db } from '../db/db';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

export async function createEvent(formData: FormData) {
  const eventName = formData.get('name');
  if (eventName) {
    await db.insert(events).values({ name: eventName as string });
    revalidatePath('/');
  }
}

export async function createTask(eventId: number, formData: FormData) {
  const taskName = formData.get('name');
  if (taskName) {
    await db
      .insert(tasks)
      .values({ name: taskName as string, eventId: eventId });
    revalidatePath(`/[slug]`, 'page');
  }
}

export async function createTimeslot(taskId: number, formData: FormData) {
  const from = formData.get('from');
  const to = formData.get('to');
  if (from && to) {
    await db
      .insert(timeslots)
      .values({ from: Number(from), to: Number(to), taskId: taskId });
    revalidatePath(`/[slug]`, 'page');
  }
}

export async function deleteTask(taskId: number) {
  await db.delete(tasks).where(eq(tasks.id, taskId));
  revalidatePath('/[slug]', 'page');
}

export async function deleteEvent(taskId: number) {
  await db.delete(events).where(eq(events.id, taskId));
  revalidatePath('/', 'page');
}

export async function deleteTimeslot(timeslotId: number) {
  await db.delete(timeslots).where(eq(timeslots.id, timeslotId));
  revalidatePath('/', 'page');
}
