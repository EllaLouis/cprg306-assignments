"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn } = useUserAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);

        if (user) {
            router.push("/week-10/shopping-list");
        }
    }, [user, router]);

    if (loading) return <p>Loading...</p>;

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

