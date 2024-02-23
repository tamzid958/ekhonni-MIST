"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import Status from "@/components/Status";
const SingleProduct = ({name,location,time,description,category,price,username}) =>
{
    return(
        <>

            {/*the main box*/}
            <div className="w-7/12 h-2/6 border-black border-2 mt-12 flex flex-row justify-center items-center ">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%] my-3 border-2 border-black flex justify-start items-start -ml-5 ">

                </div>
                {/*implementation of status*/}


                {/*details info div*/}
                <div className="w-2/3 h-[90%]  justify-center items-center flex flex-col">

                    <div className=" w-full h-[25%]  border-2 border-black flex flex-row ">
                        <div className=" w-4/5 h-2/8 border-2 border-black justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 text-ellipsis overflow-hidden">Product Name</p>
                        </div>

                        <div className=" w-1/5 h-fit border-2 border-black flex justify-end items-end ">
                            <Status value={"Status"} option={"1"} type={"button"}/>
                        </div>
                    </div>
                    {/*info div*/}
                    <div className="w-full h-[62.5%] border-2 border-black ">
                        <div className="w-full h-[40%] overflow-hidden border-2 border-black">
                            <p className="pl-5">Description:</p>
                        </div>
                        <div className="w-full h-[20%] border-2 border-black">
                            <p className="pl-5">Start Price:</p>
                        </div>
                        <div className="w-full h-[20%] flex flex-row border-2 border-black">

                            <div className="w-[50%] h-full ">
                                <p className="pl-5"> Max Bid:</p>
                            </div>
                            <div className="w-[50%] h-full ">
                                <p className="pl-5">Total Bids:</p>
                            </div>
                        </div>

                        <div className="w-full h-[20%] border-2 border-black ">
                            <p className="pl-5"> Last Bid Time:</p>
                        </div>
                    </div>

                    <div className="w-full h-[12.5%] border-2 border-black flex flex-row justify-start items-start">
                        <div className="w-[25%] h-full pl-4 ">
                            <Button value={"Details"} option={"1"} type={"button"}/>
                        </div>
                        <div className="w-[25%] h-full">
                            <Button value={"Revert"} option={"1"} type={"button"}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default SingleProduct