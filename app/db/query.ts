import 'dotenv/config';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';

const db = drizzle({ schema });

export async function getAllEvents() {
  return db.query.events.findMany();
}

export async function getEvent(slug: string) {
  return db.query.events.findFirst({
    where: (event, { eq }) => eq(event.uuid, slug),
  });
}

export async function getEventData(slug: string) {
  return db.query.events.findFirst({
    where: (event, { eq }) => eq(event.uuid, slug),
    with: {
      tasks: {
        with: {
          timeslots: {
            with: {
              members: {
                orderBy: (members, { asc }) => [asc(members.id)],
              },
            },
          },
        },
      },
    },
  });
}
