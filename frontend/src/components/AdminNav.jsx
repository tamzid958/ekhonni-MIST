"use client"
import Image from "next/image";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import ProfileBox from "@/components/ProfileBox";
import Link from "next/link";
import {useSession} from "next-auth/react";

const AdminNav = ({setAdminModalIsOpen , adminModalIsOpen}) => {

    return (
        <>
            <div onClick={() => {}}>
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
                            <Image src={"./notification.svg"} alt={"message"} width={20} height={20} className=" mr-4"/>
                            <p className=" text-lg font-semibold">Notifications</p>
                        </div>
                        <div className="flex my-auto px-5 cursor-pointer"
                             onClick={() => {}}>
                            <Image src={"./user.svg"} alt={"message"} width={20} height={20} className=" mr-4"/>
                            <p className=" text-lg font-semibold">Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminNav;