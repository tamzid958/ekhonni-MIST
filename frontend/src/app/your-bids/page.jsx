"use client"

import React from "react";
import {fetcher} from "@/utils/fetcher";
import useSWR from "swr";
import Header from "@/components/Header";
import BuyerBids from "@/components/BuyerBids";

export default function YourBids() {

    const {data, error, isLoading} = useSWR("/user/your-bids", fetcher)
    const {data :userData, error : userError , isLoading : userIsLoading} = useSWR("/user/profile" , fetcher)
    console.log(data);
    return (
        <>
            <Header/>
            <div>
                <p className="font-bold text-3xl ml-[300px] my-4 ">Your Bids</p>
            </div>
            {data && userData && data.length !== 0 &&
                <div className="w-full min-h-[350px] h-auto flex flex-col justify-start items-center ">
                {data.map((item) => (
                <BuyerBids key={item.id} id={item.bid.id} name={item.bid.product.name}
                           description={item.bid.product.description} price={item.bid.product.offeredPrice}
                           category={item.bid.product.category.category}
                           subcategory={item.bid.product.category.subCategory}
                           isSold = {item.bid.product.isSold}
                           isBidActive = {item.bid.product.isBidActive}
                           finalBuyerId = {item.bid.product.finalBuyerId}
                           image={item.images[0]?.imageByte}
                           userId = {userData.id} />
                ))}

            </div>
            }
            {!data || data &&
                data.length === 0 && (
                <div className="w-[100%] min-h-[500px] h-auto flex justify-center items-start ">
                    <p className="p-4 px-8 mt-40 cursor-pointer text-xl text-gray-500 rounded-lg ">
                        Products on which you have bid will be shown here
                    </p>
                </div>
            )}
        </>
    )
}