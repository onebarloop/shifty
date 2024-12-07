import "dotenv/config";
import { db } from "./db";
import { events } from "./schema";
import { eq } from "drizzle-orm";

export async function find() {
  return db.query.events.findMany();
}

export async function getEvent(slug: string) {
  const event = await db.select().from(events).where(eq(events.uuid, slug));
  return event;
}
