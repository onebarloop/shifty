import { serial, text, char, integer, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { randomUUID } from 'crypto';

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  uuid: char('uuid', { length: 36 })
    .$defaultFn(() => randomUUID())
    .notNull(),
  name: text('name'),
});

export const eventsRelations = relations(events, ({ many }) => ({
  tasks: many(tasks),
}));

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  name: text('name'),
  eventId: integer('event_id')
    .references(() => events.id, { onDelete: 'cascade' })
    .notNull(),
});

export const tasksRelations = relations(tasks, ({ one, many }) => ({
  event: one(events, {
    fields: [tasks.eventId],
    references: [events.id],
  }),
  timeslots: many(timeslots),
}));

export const timeslots = pgTable('timeslots', {
  id: serial('id').primaryKey(),
  from: integer('from').notNull(),
  to: integer('to').notNull(),
  taskId: integer('task_id')
    .references(() => tasks.id, { onDelete: 'cascade' })
    .notNull(),
});

export const timeslotsRelations = relations(timeslots, ({ one }) => ({
  task: one(tasks, {
    fields: [timeslots.taskId],
    references: [tasks.id],
  }),
}));
