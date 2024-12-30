'use server';

import { events, tasks, timeslots, members } from '../db/schema';
import { db } from '../db/db';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import type { Response } from '@/app/interfaces/interfaces';

// CREATE
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

export async function createTimeslot(
  state: Response | undefined,
  formData: FormData
): Promise<Response> {
  const from = formData.get('from');
  const to = formData.get('to');
  const id = formData.get('id');
  if (from && to && id) {
    await db
      .insert(timeslots)
      .values({ from: from.toString(), to: to.toString(), taskId: Number(id) });
    revalidatePath(`/[slug]`, 'page');
    return { success: true, message: `Timeslot added` };
  }
  return { success: false, message: `Failed to create timeslot` };
}

export async function createMember(
  state: Response | undefined,
  formData: FormData
): Promise<Response> {
  const name = formData.get('name');
  const id = formData.get('id');
  if (name && id) {
    await db
      .insert(members)
      .values({ name: name as string, timeslotId: Number(id) });
    revalidatePath(`/[slug]`, 'page');
    return { success: true, message: `Member added! ${name} joins the Team!` };
  }
  return { success: false, message: 'Failed to add member.' };
}

// DELETE

export async function deleteTask(taskId: number): Promise<Response> {
  try {
    await db.delete(tasks).where(eq(tasks.id, taskId));
    revalidatePath('/[slug]', 'page');
    return { success: true, message: 'Task deleted successfully.' };
  } catch {
    return { success: false, message: 'Something went wrong' };
  }
}

export async function deleteEvent(taskId: number): Promise<Response> {
  try {
    await db.delete(events).where(eq(events.id, taskId));
    revalidatePath('/', 'page');
    return { success: true, message: 'Event deleted successfully.' };
  } catch {
    return { success: false, message: 'Something went wrong' };
  }
}

export async function deleteTimeslot(timeslotId: number): Promise<Response> {
  try {
    await db.delete(timeslots).where(eq(timeslots.id, timeslotId));
    revalidatePath('/[slug]', 'page');
    return { success: true, message: 'Timeslot deleted successfully.' };
  } catch {
    return { success: false, message: 'Something went wrong' };
  }
}

export async function deleteMember(memberId: number): Promise<Response> {
  try {
    await db.delete(members).where(eq(members.id, memberId));
    revalidatePath('/[slug]', 'page');
    return { success: true, message: 'Member deleted successfully.' };
  } catch {
    return { success: false, message: 'Something went wrong' };
  }
}

// UPDATE

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
    revalidatePath('/[slug]', 'page');
    return { success: true, message: 'Member updated' };
  }
  return { success: false, message: 'Member update failed' };
}
