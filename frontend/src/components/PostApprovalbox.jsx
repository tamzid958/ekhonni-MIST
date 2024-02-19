"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
const PostApprovalbox = ({placeholder , type , name , value , onChange}) =>
{
    return(
        <>

                {/*the main box*/}
                <div className="w-4/6 h-3/6 border-black border-2 mt-12 items-start ">
                    {/*Image box*/}
                    <div
                        className="w-[300px] h-[90%] my-3 border-2 border-black flex justify-center items-center ml-4 mt-4">
                        <p>Image of the product</p>
                    </div>
                    {/*details info div*/}
                    <div className="w-4/6 h-[90%]  ml-80 -mt-80">
                        <p className=" text-2xl font-semibold pl-5"> Product Name</p><br/>
                        <div className="flex flex-row">
                            <p className="pl-5">Location:</p>
                            <p className="ml-80">Time:</p>
                        </div>
                        <br/>
                        <p className="pl-5">Product Description</p><br/>
                        <p className="pl-5"> Category:</p><br/>
                        <div className="flex flex-row">
                            <p className="pl-5"> Initial Price:</p>
                            <p className="ml-80">-UserName</p>
                        </div>
                    </div>
                    <div className="w-[200px] h-[20%] flex flex-row justify-items-end ml-[340px] -mx-72 my-[-45px]">
                        <div className="ml-22 mr-20"><Button value={"Approve"}/></div>
                        <div className=" ml-22 -mx-12"><Button value={"Decline"}/></div>
                    </div>
                </div>



        </>
    )

}
export default PostApprovalbox