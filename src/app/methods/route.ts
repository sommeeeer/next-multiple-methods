// You can opt-in to caching by using a route config option
// Good to know: Other supported HTTP methods are not cached, even if they are placed alongside a GET method that is cached, in the same file.
export const dynamic = 'force-static';

// This route should be cached
export async function GET() {
  return Response.json({
    message: 'I am a cached route?',
    date: new Date().toISOString(),
  });
}

// These should not be cached
export async function POST(request: Request) {
  const text = await request.text();
  if (text === 'HELLO') {
    return Response.json(
      {
        message: 'ok',
      },
      {
        status: 202,
      }
    );
  }
  return Response.json({ message: 'error' }, { status: 500 });
}

export async function PUT(request: Request) {
  const res = (await request.json()) as {
    data: string;
  };
  if (res.data === 'PUT') {
    return Response.json({ message: 'ok' }, { status: 201 });
  }
  return Response.json({ message: 'error' }, { status: 500 });
}