import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Node.js API route: validates the contact form and stores messages in data/messages.json (one JSON per line)
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'invalid JSON' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim().slice(0, 100);
  const email = String(body.email ?? '').trim().slice(0, 200);
  const message = String(body.message ?? '').trim().slice(0, 3000);

  if (!name || !message) return Response.json({ error: 'name and message are required' }, { status: 400 });
  if (!EMAIL_RE.test(email)) return Response.json({ error: 'that email looks sus' }, { status: 400 });

  const dir = path.join(process.cwd(), 'data');
  await mkdir(dir, { recursive: true });
  await appendFile(
    path.join(dir, 'messages.json'),
    JSON.stringify({ name, email, message, at: new Date().toISOString() }) + '\n'
  );

  return Response.json({ ok: true });
}
