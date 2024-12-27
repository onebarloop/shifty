CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" char(36) NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "members" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"timeslot_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"event_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "timeslots" (
	"id" serial PRIMARY KEY NOT NULL,
	"from" integer NOT NULL,
	"to" integer NOT NULL,
	"task_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_timeslot_id_timeslots_id_fk" FOREIGN KEY ("timeslot_id") REFERENCES "public"."timeslots"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "timeslots" ADD CONSTRAINT "timeslots_task_id_tasks_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE cascade ON UPDATE no action;