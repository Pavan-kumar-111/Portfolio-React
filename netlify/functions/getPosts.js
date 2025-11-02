import { neon } from "@netlify/neon";

export async function handler() {
  try {
    const sql = neon(process.env.NETLIFY_DATABASE_URL);

    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const posts = await sql`SELECT * FROM posts ORDER BY created_at DESC`;

    return {
      statusCode: 200,
      body: JSON.stringify(posts)
    };
  } catch (error) {
    console.error("Database error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
