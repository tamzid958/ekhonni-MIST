"use client"

import React from "react";
import {fetcher} from "@/utils/fetcher";
import useSWR from "swr";
import Header from "@/components/Header";
import BuyerBids from "@/components/BuyerBids";

export default function YourBids() {

    const {data, error, isLoading} = useSWR("/user/your-bids", fetcher)
    const {data :userData, error : userError , isLoading : userIsLoading} = useSWR("/user/profile" , fetcher)

    return (
        <>
            <Header/>
            <div>
                <p className="font-bold text-3xl ml-[300px] my-4 ">Your Bids</p>
            </div>
            {data && userData &&
            <div className="w-full min-h-[350px] h-auto flex flex-col justify-start items-center ">
                {data.map((item) => (
                <BuyerBids key={item.id} id={item.product.id} name={item.product.name}
                           description={item.product.description} price={item.offeredPrice}
                           category={item.product.category.category}
                           subcategory={item.product.category.subCategory}
                           isSold = {item.product.isSold}
                           isBidActive = {item.product.isBidActive}
                           finalBuyerId = {item.product.finalBuyerId}
                           userId = {userData.id} />
                ))}

            </div>
            }
            {!data && (
                <div className="w-[100%] min-h-[500px] h-auto flex justify-center items-start ">
                    <p className="p-4 px-8 mt-40 cursor-pointer text-xl text-gray-500 rounded-lg ">
                        Products on which you have bid will be shown here
                    </p>
                </div>
            )}
        </>
    )
}