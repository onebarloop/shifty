import 'dotenv/config';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import type { VercelPgDatabase } from 'drizzle-orm/vercel-postgres/driver';

export let db: NodePgDatabase<typeof schema> | VercelPgDatabase<typeof schema>;

if (process.env.DB_DRIVER === 'node_postgres') {
  const { drizzle } = await import('drizzle-orm/node-postgres');
  db = drizzle(process.env.POSTGRES_URL!, { schema });
} else {
  const { drizzle } = await import('drizzle-orm/vercel-postgres');
  db = drizzle({ schema });
}
