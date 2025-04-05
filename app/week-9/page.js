"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/week-9/shopping-list");
        }
    }, [user, router]);

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold">Welcome to the Shopping List App</h1>
            {!user && (
                <button
                    onClick={gitHubSignIn}
                    className="mt-4 px-6 py-2 bg-gray-900 text-white rounded"
                >
                    Sign in with GitHub
                </button>
            )}
        </div>
    );
}

export const dynamic = "force-dynamic";
