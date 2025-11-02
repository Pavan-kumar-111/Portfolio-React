import { neon } from "@neondatabase/serverless";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: "Missing required fields" };
    }

    const sql = neon(process.env.NEON_DATABASE_URL);
    await sql`
      CREATE TABLE IF NOT EXISTS portfolio_users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await sql`
      INSERT INTO portfolio_users (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "✅ Data saved successfully" })
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
}
