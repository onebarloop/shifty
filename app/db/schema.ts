import { serial, text, char, integer, pgTable} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { randomUUID } from "crypto";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  uuid: char("uuid", { length: 36 })
    .$defaultFn(() => randomUUID())
    .notNull(),
  name: text("name"),
});

export const usersRelations = relations(events, ({ many }) => ({
  tasks: many(tasks),
}));

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: text("name"),
  eventId: integer("event_id"),
});

export const tasksRelations = relations(tasks, ({ one }) => ({
  event: one(events, {
    fields: [tasks.eventId],
    references: [events.id],
  }),
}));
