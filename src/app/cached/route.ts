export const dynamic = 'force-static';

// This route should be cached
export async function GET() {
  return Response.json({
    message: 'I am a cached route?',
  });
}