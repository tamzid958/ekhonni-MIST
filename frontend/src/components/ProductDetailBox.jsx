"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import Status from "@/components/Status";
const ProductDetailBox = ({name,location,time,description,category,price,username}) =>
{
    return(
        <>

            {/*the main box*/}
            <div className="w-7/12 h-3/6 border-black border-2 mt-12 items-start mx-[300px] ">
                {/*Image box*/}
                <div
                    className="w-[300px] h-[90%] my-3 border-2 border-black flex justify-center items-center ml-4 mt-4">
                    <p>Image of the product</p>
                </div>
                {/*implementation of status*/}
                {/*<div className="">*/}
                {/*    <Status value={"Status"} option={"1"} type={"button"}/>*/}
                {/*</div>*/}

                {/*details info div*/}
                <div className="w-4/6 h-[90%]  ml-80 -mt-80">
                    <p className=" text-2xl font-semibold pl-5 -mt-5"> Product Name</p><br/>
                    <p className="pl-5">Product Description</p>

                    <br/>
                    <p className="pl-5">Price:</p><br/>
                    <p className="pl-5"> Category:</p><br/>
                    <p className="pl-5"> Number of Bids:</p>
                    <p className="pl-5"> Last Bid Time:</p>
                </div>
                   <div className="justify-items-end ml-[340px] -mx-72 my-[-45px]">
                       <Button value={"Details"} option={"1"} type={"button"}/>

                   </div>

            </div>



        </>
    )

}
export default ProductDetailBox