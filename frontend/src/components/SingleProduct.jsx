"use client"
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Status from "@/components/Status";
import SmallButton from "@/components/SmallButton";
import Image from "next/image";

const SingleProduct = ({name,location,time,description,category,price, maxbid,totalbid}) =>
{
    return(
        <>

            {/*the main box*/}
            <div className="w-7/12 h-56 border-black border-2 my-3 flex flex-row justify-center items-center ">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%] my-3 relative border-2 border-black flex justify-start items-start -ml-5 ">
                    <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"} />
                </div>
                {/*implementation of status*/}


                {/*details info div*/}
                <div className="w-2/3 h-[90%]  justify-center items-center flex flex-col">

                    <div className=" w-full h-[25%]   flex flex-row ">
                        <div className=" w-4/5 h-2/8  justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 text-ellipsis overflow-hidden">{name}</p>
                        </div>

                        <div className=" w-1/5 h-fit flex justify-end items-end ">
                            <Status value={"Status"} option={"1"} type={"button"}/>
                        </div>
                    </div>
                    {/*info div*/}
                    <div className="w-full h-[62.5%] ">
                        <div className="w-full h-[40%] overflow-hidden">
                            <p className="pl-5">{description}</p>
                        </div>
                        <div className="w-full h-[20%] ">
                            <p className="pl-5">Start Price :&nbsp;{price}</p>
                        </div>
                        <div className="w-full h-[20%] flex flex-row ">

                            <div className="w-[50%] h-full ">
                                <p className="pl-5"> Max Bid :&nbsp; {maxbid}</p>
                            </div>
                            <div className="w-[50%] h-full ">
                                <p className="pl-5">Total Bids: &nbsp; {totalbid}</p>
                            </div>
                        </div>

                        <div className="w-full h-[20%]">
                            <p className="pl-5"> Last Bid Time :&nbsp; {time}</p>
                        </div>
                    </div>

                    <div className="w-full h-[12.5%]  flex flex-row justify-start items-start">
                        <div className="w-[25%] h-full pl-4 ">
                            <SmallButton value={"Details"} option={"1"} type={"button"}/>
                        </div>
                        <div className="w-[25%] h-full">
                            <SmallButton value={"Revert"} option={"1"} type={"button"}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default SingleProduct