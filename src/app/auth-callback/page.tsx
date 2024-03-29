'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const AuthCallbackPageContent = () => {
    const router = useRouter();
    console.log("callback page");
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const { data, error, isLoading } = trpc.authCallback.useQuery();

    useEffect(() => {
        if (!isLoading) {
            if (data?.success) {
                router.push(origin ? `/${origin}` : '/dashboard');
            } else if (error?.data?.code === 'UNAUTHORIZED') {
                router.push('/sign-in');
            }
        }
    }, [isLoading, data, error, router, origin]);

    return (
        <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="font-semibold text-xl">Setting up your account...</h3>
                <p>You will be redirected automatically.</p>
            </div>
        </div>
    )
};

const AuthCallbackPage = dynamic(() => Promise.resolve(AuthCallbackPageContent), { ssr: false });

export default AuthCallbackPage;