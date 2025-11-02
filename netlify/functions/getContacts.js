import { neon } from "@netlify/neon";

export async function handler() {
  try {
    const sql = neon(process.env.NETLIFY_DATABASE_URL);

    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const contacts = await sql`SELECT * FROM contacts ORDER BY created_at DESC`;

    return {
      statusCode: 200,
      body: JSON.stringify(contacts)
    };
  } catch (error) {
    console.error("Database error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
