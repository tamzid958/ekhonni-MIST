"use client"
import React from 'react';

import SmallButton from "@/components/SmallButton";
import Image from "next/image";
import {toast} from "sonner";
import {requestApi} from "@/utils/axios.settings";
import {useSWRConfig} from "swr";

const PostApprovalbox = ({id, name, location, time, description, category, subCategory, price, username}) => {

    const {mutate} = useSWRConfig();
    let isApprovedByAdmin = "";
    const handleAccept = async (e,value) => {
        e.preventDefault();
            try {
                const res = await requestApi({
                    url: `/admin/products/${id}`,
                    method: "PUT",
                    params: {
                        isApprovedByAdmin: value
                    }
                });

                mutate("/admin/products/review");

            } catch (error) {
                toast.error("An unexpected error occurred. Please try again.");
            }
    };

    return (
        <>

            {/*the main box*/}
            <div className="w-7/12 h-56 border-black border-2 my-4 flex flex-row justify-center items-center ml-16 rounded-lg shadow-md shadow-slate-400">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%]  relative my-3 border-2 border-black flex justify-start items-start -ml-5 ">
                    <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"}/>
                </div>

                {/*details info div*/}
                <div className="w-2/3 h-[90%] pb-2 justify-center items-center flex flex-col">

                    <div className=" w-full h-[20%]  flex flex-row ">
                        <div className=" w-full h-2/8 justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 truncate overflow-hidden">{name}</p>
                        </div>

                    </div>
                    {/*info div*/}
                    <div className="w-full h-[67.5%] ">
                        <div className="w-full h-[40%] flex items-start">
                            <p className="pl-5 font-light">{description}</p>
                        </div>
                        <div className="w-full h-[25%] flex flex-row">
                            <div className="w-[100%] h-[16.3%]">
                                <p className="pl-5">{category}, {subCategory}</p>
                            </div>
                        </div>
                        <div className="w-full h-[16.3%] flex flex-row">
                            <div className="w-[33%] h-full items-start">
                                <p className="pl-5">Price :&nbsp; <span
                                    className="font-medium">Tk {price}</span></p>
                            </div>
                            <div className="w-[33%] h-full items-end">
                                <p className="pl-5 ">Location - {location}</p>
                            </div>
                            <div className="w-[33%] h-full items-center">
                                <p className="pl-5 text-sm">Post Added by <span className="font-medium">{username}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[12.5%] -mt-3 flex flex-row justify-start items-start">
                        <div className="w-[25%] pl-4">
                            <SmallButton
                                // onClick={(e) => handleInputChange(true)}
                                onClick={(e) => handleAccept(e,true)}
                                value={"Approve"}
                                option={"1"} type={"button"}/>
                        </div>
                        <div className="w-[25%]">
                            <SmallButton
                                // onClick={(e) => handleInputChange(false)}
                                onClick={(e) => handleAccept(e, false)}
                                value={"Decline"}
                                option={"1"} type={"button"}/>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )

}
export default PostApprovalbox