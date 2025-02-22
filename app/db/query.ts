import { db } from './db';

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
            orderBy: (timeslots, { asc }) => [asc(timeslots.to)],
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
