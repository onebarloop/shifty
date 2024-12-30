import { serial, text, char, integer, time, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { randomUUID } from 'crypto';

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  uuid: char('uuid', { length: 36 })
    .$defaultFn(() => randomUUID())
    .notNull(),
  name: text('name').notNull(),
});

export const eventsRelations = relations(events, ({ many }) => ({
  tasks: many(tasks),
}));

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
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
  from: time('from').notNull(),
  to: time('to').notNull(),
  taskId: integer('task_id')
    .references(() => tasks.id, { onDelete: 'cascade' })
    .notNull(),
});

export const timeslotsRelations = relations(timeslots, ({ one, many }) => ({
  task: one(tasks, {
    fields: [timeslots.taskId],
    references: [tasks.id],
  }),
  members: many(members),
}));

export const members = pgTable('members', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  timeslotId: integer('timeslot_id')
    .references(() => timeslots.id, { onDelete: 'cascade' })
    .notNull(),
});

export const membersRelations = relations(members, ({ one }) => ({
  timeslot: one(timeslots, {
    fields: [members.timeslotId],
    references: [timeslots.id],
  }),
}));
