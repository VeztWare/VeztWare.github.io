export default async (req: Request, context: Context) => {
  if (req.method === 'GET') {
    return new Response("Hello, this is a GET request response!");
  }
  return new Response("Sorry, this function only responds to GET requests.", { status: 400 });
};
