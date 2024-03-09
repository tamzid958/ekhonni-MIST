"use client"
import React from 'react';
import Status from "@/components/Status";
import SmallButton from "@/components/SmallButton";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({id, name, description, category , subcategory, startingPrice , isBidActive , isSold, image}) => {
    return (
        <>
            {/*the main box*/}
            <Link href={`/product/${id}`}
                  className="w-7/12 h-56 relative border-black border-2 shadow-md shadow-slate-300 my-3 flex flex-row justify-center items-center transition ease-in-out duration-500 hover:-translate-y-1 rounded-lg">
                {/*Image box*/}
                <div
                    className="w-1/4 h-[82%] my-3  relative border-2 border-black flex justify-start items-start -ml-5 ">
                    <Image src={image} alt={"dslr"} fill objectFit={"cover"}/>
                </div>
                {/*implementation of status*/}
                {/*details info div*/}
                <div className="w-2/3 h-[90%] pl-4 pb-3 justify-center items-center flex flex-col">
                    <div className=" w-full h-[25%]   flex flex-row ">
                        <div className=" w-4/5 h-2/8  justify-items-start ">
                            <p className="  text-2xl font-semibold ml-5 text-ellipsis overflow-hidden">{name}</p>
                        </div>
                        {isSold && <Status option={"sold"} type={"button"}/>}
                        {!isSold && isBidActive && <Status option={"ongoing"} type={"button"}/>}
                        {!isSold && !isBidActive && <Status option={"paused"} type={"button"}/>}
                    </div>
                    <div className="w-full h-[62.5%] ">
                        <div className="w-full h-[40%] overflow-hidden">
                            <p className="pl-5 font-light">{description}</p>
                        </div>
                        <div className="w-full h-[20%] ">
                            <p className="pl-5">{category}, {subcategory}</p>
                        </div>
                        <div className="w-full h-[40%] flex items-center">
                            <p className="pl-5 text-lg">Initial Price : <span className="font-medium">Tk {startingPrice} </span>
                            </p>
                        </div>


                    </div>

                    <div className="w-full h-[12.5%]  flex flex-row justify-start items-start">
                        <div className="w-[25%] h-full pl-4 ">
                            <SmallButton value={"Details"} option={"1"} type={"button"}/>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )

}
export default SingleProduct