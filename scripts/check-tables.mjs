import pg from 'pg';
const client = new pg.Client(process.env.DATABASE_URL);
await client.connect();
const r = await client.query("SELECT tablename FROM pg_tables WHERE schemaname='public' ORDER BY tablename");
r.rows.forEach(t => console.log(t.tablename));
await client.end();
