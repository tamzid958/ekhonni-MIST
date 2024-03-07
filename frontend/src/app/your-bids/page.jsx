"use client"

import React from "react";
import {fetcher} from "@/utils/fetcher";
import useSWR from "swr";
import Header from "@/components/Header";
import BuyerBids from "@/components/BuyerBids";

const isPurchased = (userData, productData) => {
    if (productData?.isSold && (productData?.finalBuyerId === userData?.id)) {
        return true;
    } else {
        return false;
    }
}
const isFinalBuyer = (userData, productData) => {
    console.log(userData?.id, "user id", productData?.finalBuyerId, "final buyer id")
    if (productData?.finalBuyerId === userData?.id) {
        return true;
    } else {
        return false
    }
}
export default function YourBids() {

    const {data, error, isLoading} = useSWR("/user/your-bids", fetcher)
    console.log(data);
    return (
        <>
            <Header/>
            <div>
                <p className="font-bold text-3xl ml-[300px] my-4 ">Your Bids</p>
            </div>
            <div className="w-full min-h-[500px] h-auto flex flex-col justify-start items-center ">
                {data && data.map((item) => (
                    <BuyerBids key={item.id} id={item.product.id} name={item.product.name}
                               description={item.product.description} price={item.offeredPrice}
                               category={item.product.category.category}
                               subcategory={item.product.category.subCategory}/>
                ))}

            </div>
            {!data && (
                <div className="w-[60%] min-h-[500px] border-2 border-black h-auto flex justify-center items-start">
                    <p className="p-4 px-8 cursor-pointer text-xl bg-slate-100 border border-slate-300 shadow-md shadow-slate-400 rounded-lg ">You
                        have no bids yet</p>
                </div>
            )}
        </>
    )
}