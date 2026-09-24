import { NextResponse } from 'next/server';

// IndexNow key verification file served via route handler
// (public/ is gitignored in this project, so we serve the key dynamically)
export const dynamic = 'force-static';

export function GET() {
  return new NextResponse('chineseattractionsindexnow2026', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
