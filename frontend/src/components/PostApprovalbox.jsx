"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";

import SmallButton from "@/components/SmallButton";
import Image from "next/image";

const PostApprovalbox = ({id,name,location,time,description,category,price,username}) =>
{
    return(
        <>

            {/*the main box*/}
            <div className="w-7/12 h-56 border-black border-2 my-4 flex flex-row justify-center items-center ml-16 ">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%]  relative my-3 border-2 border-black flex justify-start items-start -ml-5 ">
                    <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"} />
                </div>

                {/*details info div*/}
                <div className="w-2/3 h-[90%]  justify-center items-center flex flex-col">

                    <div className=" w-full h-[25%]  flex flex-row ">
                        <div className=" w-full h-2/8 justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 truncate overflow-hidden">{name}</p>
                        </div>

                    </div>
                    {/*info div*/}
                    <div className="w-full h-[62.5%] ">
                        <div className="w-full h-[45%]">
                            <p className="pl-5">{description}</p>
                        </div>
                        <div className="w-full h-[25%] flex flex-row">
                            <div className="w-[50%] h-[16.3%]">
                                <p className="pl-5">Category:{category}</p>
                            </div>
                            <div className="w-[50%]  h-[16.3%] items-end">
                                <p className="pl-5">Time:{time}</p>
                            </div>
                        </div>
                        <div className="w-full  h-[16.3%] flex flex-row">
                            <div className="w-[50%] h-full items-start">
                                <p className="pl-5">Price :&nbsp; <span className="text-cyan-950 font-medium">{price}</span></p>
                            </div>
                            <div className="w-[50%] h-full items-end">
                                <p className="pl-5 "> -{username}</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full h-[12.5%] -mt-3 flex flex-row justify-start items-start">
                        <div className="w-[25%] pl-4">
                            <SmallButton value={"Approve"} option={"1"} type={"button"}/>
                        </div>
                       <div className="w-[25%]">
                           <SmallButton value={"Decline"} option={"1"} type={"button"}/>
                       </div>

                    </div>
                </div>


            </div>


        </>
    )

}
export default PostApprovalbox