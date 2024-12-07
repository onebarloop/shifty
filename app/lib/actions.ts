'use server';

import { events } from "../db/schema";
import { db } from '../db/db'
import { revalidatePath } from 'next/cache';

export async function createEvent(formData: FormData) {
    const eventName = formData.get('name');
    if (eventName) {
        await db.insert(events).values({ name: eventName as string });
        revalidatePath('/');
    }
}