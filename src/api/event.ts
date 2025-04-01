import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  const authHeader = request.headers.get('Authorization');
  const adminKey = authHeader?.replace('Bearer ', '');
  
  if (adminKey !== process.env.ADMIN_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const body = await request.json();
  
  try {
    await sql`
      INSERT INTO events (date, title, time, location, rewards, description, image_url)
      VALUES (
        ${body.date},
        ${body.title},
        ${body.time},
        ${body.location},
        ${body.rewards},
        ${body.description},
        ${body.imageUrl}
      )
    `;
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}