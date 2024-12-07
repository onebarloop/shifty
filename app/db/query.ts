import "dotenv/config";
import { db } from "./db";

export async function getAllEvents() {
  return db.query.events.findMany();
}

export async function getEvent(slug: string) {
  return db.query.events.findFirst({
    where: (event, { eq }) => eq(event.uuid, slug),
  });
}