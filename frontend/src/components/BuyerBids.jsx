"use client"
import React from 'react';
import Status from "@/components/Status";
import Image from "next/image";
import SmallButton from "@/components/SmallButton";

const BuyerBids = ({id, name, time, description, category, price}) => {
    return (
        <>

            {/*the main box*/}
            <div className="w-7/12 h-56 border-black border-2 my-4 flex flex-row justify-center items-center ">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%] relative my-3 border-2 border-black flex justify-start items-start -ml-5 ">
                    <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"}/>
                </div>
                {/*implementation of status*/}


                {/*details info div*/}
                <div className="w-2/3 h-[90%]  justify-center items-center flex flex-col">

                    <div className=" w-full h-[25%]  flex flex-row ">
                        <div className=" w-4/5 h-2/8 justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 overflow-hidden">{name}</p>
                        </div>

                        <div className=" w-1/5 h-full flex justify-end items-end mr-2">
                            <Status value={"Status"} option={"1"} type={"button"}/>
                        </div>
                    </div>
                    {/*info div*/}
                    <div className="w-full h-[62.5%] ">
                        <div className="w-full h-[45%] ">
                            <p className="pl-5 overflow-hidden">{description}</p>
                        </div>
                        <div className="w-full h-[20%] ">
                            <p className="pl-5">Price :&nbsp;<span className="text-cyan-950 font-medium">{price}</span>
                            </p>
                        </div>
                        <div className="w-full h-[20%] ">
                            <p className="pl-5"> Category:{category}</p>
                        </div>

                        <div className="w-full h-[20%] ">
                            <p className="pl-5"> Last Bid Time:{time}</p>
                        </div>
                    </div>
                    <div className="w-full h-[12.5%] ml-8 mt-5 flex items-end ">
                        <SmallButton value={"Details"} option={"1"} type={"button"}/>
                    </div>
                </div>


            </div>


        </>
    )

}
export default BuyerBids