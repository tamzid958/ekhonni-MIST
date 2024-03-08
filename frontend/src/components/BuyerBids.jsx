"use client"
import React from 'react';
import Status from "@/components/Status";
import Image from "next/image";
import SmallButton from "@/components/SmallButton";
import Link from "next/link";

const BuyerBids = ({id, name, subcategory, description, category, price , isSold , isBidActive , finalBuyerId , userId}) => {
    return (
        <>
            {/*the main box*/}
            <Link href={`/product/${id}`}
                  className="w-7/12 h-56 relative border-black border-2 my-4 flex flex-row justify-center items-center shadow-lg shadow-slate-300 transition ease-in-out duration-500 hover:-translate-y-1 rounded-md">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%] relative my-3 border-2 border-black flex justify-start items-start -ml-5 ">
                    <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"}/>
                </div>
                {/*implementation of status*/}


                {/*details info div*/}
                <div className="w-2/3 h-[90%] pl-4 py-1 justify-center items-center flex flex-col">
                    <div className=" w-full h-[25%]  flex flex-row ">
                        <div className=" w-4/5 h-2/8 justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 overflow-hidden">{name}</p>
                        </div>
                        {isSold && finalBuyerId !== userId && <Status option={"sold"} type={"button"}/>}
                        {isSold && finalBuyerId === userId && <Status option={"purchased"} type={"button"}/>}
                        {!isSold && finalBuyerId === userId && <Status option={"buynow"} type={"button"}/>}
                        {isBidActive && !isSold && !finalBuyerId && <Status option={"ongoing"} type={"button"}/>}
                        {!isBidActive && !isSold && finalBuyerId !== userId &&  <Status option={"paused"} type={"button"}/>}

                    </div>
                    {/*info div*/}
                    <div className="w-full h-[62.5%] ">
                        <div className="w-full h-[45%] ">
                            <p className="pl-5 overflow-hidden font-light">{description}</p>
                        </div>
                        <div className="w-full h-[20%]">
                            <p className="pl-5"> {category}, {subcategory}</p>
                        </div>
                        <div className="w-full h-[40%] flex items-center">
                            <p className="pl-5 text-lg ">Your Bid : <span
                                className="font-medium">Tk {price}</span>
                            </p>
                        </div>

                    </div>
                    <div className="w-full h-[12.5%] ml-8 mt-5 flex items-end ">
                        <SmallButton value={"Details"} option={"1"} type={"button"}/>
                    </div>
                </div>
            </Link>
        </>
    )

}
export default BuyerBids