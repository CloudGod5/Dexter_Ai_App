import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = async (req: any, res: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  return handleAuth(req, res);
}

const handler = async (req: any, res: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  return handleAuth(req, res);
}

export { handler as POST }


// import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
// import { appRouter } from '@/trpc'

// const handler = (req: Request) =>
//   fetchRequestHandler({
//     endpoint: '/api/trpc',
//     req,
//     router: appRouter,
//     createContext: () => ({}),
//   })

// export { handler as GET, handler as POST }