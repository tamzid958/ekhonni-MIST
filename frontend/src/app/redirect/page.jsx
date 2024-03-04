import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


const RedirectPage = () => {

    const router = useRouter();
    const {data : session} = useSession();
    if(session?.user.role === "Admin") {
        router.push("/admin-page")
    }
    else {
        router.push("/")
    }
}

export default RedirectPage;
