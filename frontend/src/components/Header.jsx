"use client"
import Image from "next/image";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import ProfileBox from "@/components/ProfileBox";
import Link from "next/link";
import NotificationListModal from "@/components/NotificationListModal";
import {useSession , signIn , signOut} from "next-auth/react";


const Header = () => {

    const {data : session} = useSession();
    console.log(session?.user.token);

    const [profileModel, setProfileModel] = useState(false);

    // const [Token, setToken] = useState(false);

    const [notificationModalOpen, setNotificationModalOpen] = useState(false);

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     setToken(true);
    // }, []);


    const CloseModel = () => {
        if (profileModel) {
            setProfileModel(false);
        }
        if (notificationModalOpen) {
            setNotificationModalOpen(false);
        }
    }

    const notificationList = [
        {
            id: "1",
            message: "Your product has been approved",
            link: "link",
            buttonText: "Go to your products",
            time: "3:52 PM"
        },
        {
            id: "2",
            message: "Your product has been sold",
            link: "link",
            buttonText: "Go to your products",
            time: "4:35 PM"
        },
        {
            id: "3",
            message: "Your bid has been selected",
            link: "link",
            buttonText: "Go to your bids",
            time: "5:09 PM"
        },
        {
            id: "4",
            message: "Your product has been approved",
            link: "link",
            buttonText: "Go to your products",
            time: "6:15 PM"
        },
        {
            id: "5",
            message: "Your product has been rejected",
            link: "link",
            buttonText: "Go to your products",
            time: "7:30 PM"
        }
    ]
    const notificationsNo = notificationList.length;
    const [notifications, setNotifications] = useState(notificationsNo);
    return (
        <>
            <div onClick={CloseModel}>
                <div className=" px-6 w-full overflow-x-hidden h-[100px] border-black flex justify-between bg-slate-100">
                    <div className="flex">
                        <Link href={"/"} className={"my-auto"}>
                            <div className=" my-auto">
                                <h1 className=" font-extrabold text-2xl font-serif tracking-widest">Ekhonni</h1>
                                <p className=" text-sm">Buy now,pay later</p>
                            </div>
                        </Link>
                        <div className="flex my-auto px-5">
                            <Image src={"./all_adds.svg"} alt={"message"} width={30} height={30} className=" mr-4"/>
                            <p className=" text-lg font-semibold">All ads</p>
                        </div>
                    </div>
                    <div className="flex my-auto">
                        <div className="flex my-auto px-5 cursor-pointer relative" onClick={() => {setNotificationModalOpen(!notificationModalOpen)}}>
                            <Image src={"./notification.svg"} alt={"message"} width={20} height={20} className="mr-4"/>
                            {session ?
                                notifications !== 0 && !notificationModalOpen &&
                                (<div className="absolute -top-2 right-36 w-5 h-5 flex items-center justify-center text-white bg-rose-600 opacity-85 text-xs rounded-full">
                                    <span>{notifications}</span>
                                </div>) :
                                (<></>)
                            }
                            <p className=" text-lg font-semibold">Notifications</p>
                        </div>
                        <div className="flex my-auto px-5 cursor-pointer" onClick={() => setProfileModel(prevState => !prevState)}>
                            <Image src={"./user.svg"} alt={"message"} width={20} height={20} className=" mr-4"/>
                            <p className=" text-lg font-semibold">Account</p>
                        </div>
                        {session ?
                            (<Link href={"/add-product"}>
                                <Button value="Post Ad" option={1} type={"submit"}/>
                            </Link>) :
                            (<Link href={"/login"}>
                                <Button value="Log in" option={1} type={"button"} onClick={() => signIn()}/>
                            </Link>)}
                    </div>
                </div>
                {profileModel && <ProfileBox/>}
                {notificationModalOpen &&
                    <NotificationListModal setModalOpen={setNotificationModalOpen} setNotifications={setNotifications} notificationList={notificationList}/>}
            </div>
        </>
    )
}
export default Header;