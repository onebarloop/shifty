import { serial, text, char, pgTable } from "drizzle-orm/pg-core";
import { randomUUID } from 'crypto'
// import { relations } from "drizzle-orm";

export const events = pgTable('events', {
    id: serial('id').primaryKey(),
    uuid: char('uuid', {length: 36}).$defaultFn(() => randomUUID() ),
    name: text('name')
})