import { drizzle } from 'drizzle-orm/vercel-postgres';
import { migrate } from 'drizzle-orm/vercel-postgres/migrator';

const db = drizzle();

async function main() {
  await migrate(db, { migrationsFolder: './drizzle' });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

main();
