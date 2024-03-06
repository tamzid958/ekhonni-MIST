"use client"

import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {FallingLines} from "react-loader-spinner";
import {useEffect} from "react";

const RedirectPage = () => {
    const router = useRouter();
    const {data: session} = useSession();

    useEffect(() => {
        if (session?.user?.user?.role) {
            const userRole = session.user.user.role;
            if (userRole === "ROLE_ADMIN") {
                router.push("/admin-page")
            } else {
                router.push("/")
            }
        }
    }, [router, session])

    return (
        <div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-center items-center bg-neutral-800">
            <h1 className="text-xl text-white mb-3">Redirecting...</h1>
            <FallingLines color="#ffffff" width="100" visible={true} ariaLabel="falling-circles-loading"/>
        </div>
    )
}

export default RedirectPage;



