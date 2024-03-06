"use client"
import Image from "next/image";
import Button from "@/components/Button";
import {useState} from "react";
import ProfileBox from "@/components/ProfileBox";
import Link from "next/link";
import NotificationListModal from "@/components/NotificationListModal";
import {signIn, useSession} from "next-auth/react";
import NotificationSVG from "../../public/notification.svg";
import AccountSVG from "../../public/user.svg"
import AllAdsSVG from "../../public//all_adds.svg"
import {usePathname} from "next/navigation";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";

const Header = () => {

    const {data: session} = useSession();
    const currentURL = usePathname();
    const [profileModel, setProfileModel] = useState(false);
    const [notificationModalOpen, setNotificationModalOpen] = useState(false);

    const {data: notificationData, error, isLoading} = useSWR('/user/notification/fetch', fetcher);
    const CloseModal = (e) => {
        if (e.target.id !== "notificationModal" && e.target.id !== "notificationList") {
            if (profileModel) {
                setProfileModel(false);
            }
            if (notificationModalOpen) {
                setNotificationModalOpen(false);
            }
        }
    }
    return (
        <>
            <div id={"mainHeader"} onClick={(e) => {
                CloseModal(e)
            }}>
                <div
                    className=" px-6 w-full overflow-x-hidden h-[100px] border-black flex justify-between bg-slate-100">
                    <div className="flex">
                        <Link href={"/"} className={"my-auto"}>
                            <div className=" my-auto">
                                <h1 className=" font-extrabold text-2xl font-serif tracking-widest">Ekhonni</h1>
                                <p className=" text-sm">Buy now,pay later</p>
                            </div>
                        </Link>
                        <div className="flex my-auto px-5">
                            <Image src={AllAdsSVG} alt={"message"} width={30} height={30} className=" mr-4"/>
                            <p className=" text-lg font-semibold">All ads</p>
                        </div>
                    </div>
                    <div className="flex my-auto">
                        <div className="flex my-auto px-5 cursor-pointer relative" onClick={() => {
                            setNotificationModalOpen(!notificationModalOpen)
                        }}>
                            <Image src={NotificationSVG} alt={"message"} width={20} height={20} className="mr-4"/>
                            {session ?
                                notificationData && notificationData.length !== 0 && !notificationModalOpen &&
                                (<div
                                    className="absolute -top-2 right-36 w-5 h-5 flex items-center justify-center text-white bg-rose-600 opacity-85 text-xs rounded-full">
                                    <span>{notificationData.length}</span>
                                </div>) :
                                (<></>)
                            }
                            <p className=" text-lg font-semibold">Notifications</p>
                        </div>
                        <div className="flex my-auto px-5 cursor-pointer"
                             onClick={() => setProfileModel(prevState => !prevState)}>
                            <Image src={AccountSVG} alt={"message"} width={20} height={20} className=" mr-4"/>
                            <p className=" text-lg font-semibold">Account</p>
                        </div>
                        {session ?
                            (currentURL !== "/add-product" &&
                                <Link href={"/add-product"}>
                                    <Button value="Post Ad" option={1} type={"submit"}/>
                                </Link>) :
                            (currentURL !== "/login" &&
                                <Link href={"/login"}>
                                    <Button value="Log in" option={1} type={"button"} onClick={() => signIn()}/>
                                </Link>)}
                    </div>
                </div>
                {profileModel && <ProfileBox/>}
                {notificationModalOpen &&
                    <NotificationListModal setModalOpen={setNotificationModalOpen}
                                           notificationList={notificationData ? notificationData : []}/>}
            </div>
        </>
    )
}
export default Header;