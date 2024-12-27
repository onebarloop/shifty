import { relations } from "drizzle-orm/relations";
import { events, tasks, timeslots, members } from "./schema";

export const tasksRelations = relations(tasks, ({one, many}) => ({
	event: one(events, {
		fields: [tasks.eventId],
		references: [events.id]
	}),
	timeslots: many(timeslots),
}));

export const eventsRelations = relations(events, ({many}) => ({
	tasks: many(tasks),
}));

export const timeslotsRelations = relations(timeslots, ({one, many}) => ({
	task: one(tasks, {
		fields: [timeslots.taskId],
		references: [tasks.id]
	}),
	members: many(members),
}));

export const membersRelations = relations(members, ({one}) => ({
	timeslot: one(timeslots, {
		fields: [members.timeslotId],
		references: [timeslots.id]
	}),
}));