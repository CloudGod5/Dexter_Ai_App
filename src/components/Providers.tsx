"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";

const Provider = ({children}: PropsWithChildren) => {
    const domain = process.env.VERCEL_URL || 'http://localhost:3000';
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${domain}/api/trpc`,
            }),
        ]
    }));

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}  
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default Provider