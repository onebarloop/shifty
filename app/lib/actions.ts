'use server';

import { events, tasks, timeslots, members } from '../db/schema';
import { db } from '../db/db';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import  type { Response} from '@/app/interfaces/interfaces';

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

export async function createMember(timeslotId: number, formData: FormData) {
  const name = formData.get('name');
  if (name) {
    await db
      .insert(members)
      .values({ name: name as string, timeslotId: timeslotId });
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
  revalidatePath('/[slug]', 'page');
}

export async function deleteMember(memberId: number) {
  await db.delete(members).where(eq(members.id, memberId));
  revalidatePath('/[slug]', 'page');
}

export async function updateMember(
  state: Response | undefined,
  formData: FormData
): Promise<Response> {
  const name = formData.get('name');
  const id = formData.get('id');
  if (name && id) {
    await db
      .update(members)
      .set({ name: name as string })
      .where(eq(members.id, Number(id)));
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    revalidatePath('/[slug]', 'page');
    return {success: true, message: 'Member updated'};
  }
  return {success: false, message: 'Member update failed'};
}
