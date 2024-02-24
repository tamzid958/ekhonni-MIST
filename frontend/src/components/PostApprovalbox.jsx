"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import Status from "@/components/Status";
const PostApprovalbox = ({name,location,time,description,category,price,username}) =>
{
    return(
        <>

            {/*the main box*/}
            <div className="w-7/12 h-2/6 border-black border-2 mt-12 flex flex-row justify-center items-center ">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%] my-3 border-2 border-black flex justify-start items-start -ml-5 ">

                </div>

                {/*details info div*/}
                <div className="w-2/3 h-[90%]  justify-center items-center flex flex-col">

                    <div className=" w-full h-[25%]  flex flex-row ">
                        <div className=" w-full h-2/8 justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 truncate overflow-hidden">Product Name</p>
                        </div>

                    </div>
                    {/*info div*/}
                    <div className="w-full h-[62.5%] ">
                        <div className="w-full h-[50%]">
                            <p className="pl-5">Description:</p>
                        </div>
                        <div className="w-full h-[20%] flex flex-row">
                            <div className="w-[50%] h-[16.3%]">
                                <p className="pl-5">Category:</p>
                            </div>
                            <div className="w-[50%]  h-[16.3%] items-end">
                                <p className="pl-5">Time</p>
                            </div>
                        </div>
                        {/*<div className="w-full  h-[20%]">*/}
                        {/*    <p className="pl-5"> Category:</p>*/}
                        {/*</div>*/}

                        <div className="w-full  h-[16.3%] flex flex-row">
                            <div className="w-[50%] h-full items-start">
                                <p className="pl-5"> Initial price:</p>
                            </div>
                            <div className="w-[50%] h-[16.3%] items-end">
                                <p className="pl-5 "> -Username</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full h-[12.5%] -mt-3 flex flex-row justify-start items-start">
                        <div className="w-[25%] pl-4">
                            <Button value={"Approve"} option={"1"} type={"button"}/>
                        </div>
                       <div className="w-[25%]">
                           <Button value={"Decline"} option={"1"} type={"button"}/>
                       </div>

                    </div>
                </div>


            </div>


        </>
    )

}
export default PostApprovalbox