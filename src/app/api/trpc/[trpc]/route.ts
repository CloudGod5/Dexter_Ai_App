import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();


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