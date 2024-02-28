"use client"
import Image from "next/image";
import Button from "@/components/Button";
import {useState,useEffect} from "react";
import ProfileBox from "@/components/ProfileBox";
import Link from "next/link";


const Header = () => {
    const [profileModel,setProfileModel] = useState(false);
    const [Token,setToken] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
    }, []);


    const CloseModel = ()=>{
        if(profileModel){
            setProfileModel(false);
        }
    }
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
                        <div className="flex my-auto px-5">
                            <Image src={"./notification.svg"} alt={"message"} width={20} height={20} className=" mr-4"/>
                            <p className=" text-lg font-semibold">Notifications</p>
                        </div>
                        <div className="flex my-auto px-5 cursor-pointer" onClick={() => setProfileModel(prevState => !prevState)}>
                            <Image src={"./user.svg"} alt={"message"} width={20} height={20} className=" mr-4"/>
                            <p className=" text-lg font-semibold">Account</p>
                        </div>
                        {Token? <Link href={"/add-product"}>
                            <Button value="Post Ad" option={1} type={"submit"} />
                        </Link> : <Link href={"/login"}><Button value="Log in" option={1} type={"submit"} /></Link>}
                    </div>
                </div>
                {profileModel && <ProfileBox /> }
            </div>
        </>
    )
}
export default Header;