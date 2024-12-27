import 'dotenv/config';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { VercelPgDatabase } from 'drizzle-orm/vercel-postgres/driver';

export let db: NodePgDatabase<typeof schema> | VercelPgDatabase<typeof schema>;

if (process.env.ENVIRONMENT === 'local') {
  const { drizzle } = await import('drizzle-orm/node-postgres');
  db = drizzle(process.env.POSTGRES_URL!, { schema });
} else {
  const { drizzle } = await import('drizzle-orm/vercel-postgres');
  console.log('test')
  db = drizzle({ schema });
}
