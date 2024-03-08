"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const logOut = async () => {
    await signOut();
}

const AdminNav = ({setAdminModalIsOpen, adminModalIsOpen}) => {
    const router = useRouter();
    const {data: session} = useSession();
    if (session) {
        return (
            <>
                <div
                    className=" px-6 w-full overflow-x-hidden h-[100px] border-black flex justify-between bg-slate-100 ">
                    <div className="flex">
                        <div className="flex my-auto px-5" onClick={() => (setAdminModalIsOpen(!adminModalIsOpen))}>
                            {adminModalIsOpen ? <Image src={"./bar-staggered.svg"} alt={"bars"} width={30} height={30}
                                                       className=" mr-4 cursor-pointer"/> :
                                <Image src={"./bars.svg"} alt={"bars"} width={30} height={30}
                                       className=" mr-4 cursor-pointer"/>}
                        </div>
                        <Link href={"/"} className={"my-auto"}>
                            <div className=" my-auto">
                                <h1 className=" font-extrabold text-2xl font-serif tracking-widest">Ekhonni</h1>
                                <p className=" text-sm">Buy now,pay later</p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex my-auto">
                        <div className="flex my-auto px-5">
                            <Button value={"Log Out"} type={"button"} option={1} onClick={() => {
                                logOut()
                            }}/>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        router.push("/login")
    }

}
export default AdminNav;