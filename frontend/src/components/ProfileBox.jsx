"use client"

import React,{useState,useEffect} from "react";
import Image from "next/image";
import Button from "@/components/Button";
import ProfileDiv from "@/components/ProfileDiv";
import Link from "next/link";
import axios from "axios";

const ProfileBox = ({email})=>{
    const [data,setData] = useState();
    const token = localStorage.getItem("token");
    const imageUrl = (data && data.profilePicture) ? URL.createObjectURL(new Blob([data.profilePicture.imageByte], { type: data.profilePicture.type })) : "/avatar.png";
    useEffect(() => {


        axios.get(`http://localhost:8080/api/v1/user/profile/${email}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' // Specify content type if required
            }
        })
            .then((res) => {
                console.log(res.data.profilePicture);
                setData(res.data)

            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);





    return (
        <>
            <div className="w-[300px] top-16 absolute z-10 bg-white border-2 border-black overflow-hidden float-right right-1 rounded-lg m-3">
                <Link href={"/profile"}>
                    <div className="w-full h-[110px] flex border-b-2 border-black">
                        <div className="w-1/3 h-full relative">
                            <Image src={(data && data.profilePicture) ? URL.createObjectURL(new Blob([data.profilePicture.imageByte], { type: data.profilePicture.type })) : "/avatar.png"} alt={"Profile"} fill objectFit={"cover"}
                                   className={"rounded-full px-1 py-2"}/>
                        </div>
                        <div className={"w-2/3 h-full flex justify-start items-center pl-4"}>
                            <h1 className={"tracking-widest text-xl font-semibold"}>{data? data.name : ''}</h1>
                        </div>
                    </div>
                </Link>
                <div className="w-full h-[80px] py-3 px-2 gap-x-3 flex justify-center items-center">
                    <Button value={"Your Bid"} option={true} type={"submit"}/>
                    <Button value={"Your Product"} option={true} type={"submit"}/>
                </div>
                <div className={"w-full mt-3"}>
                    <ProfileDiv image={"/edit.svg"} text={"Edit Profile"} color={"bg-slate-100"}/>
                    <ProfileDiv image={"/logout.svg"} text={"Logout"} color={"bg-slate-100"}/>
                    <ProfileDiv image={"/delete.svg"} text={"Delete Account"} color={"bg-red-500"}/>
                </div>
            </div>
        </>
    )
}
export default ProfileBox;