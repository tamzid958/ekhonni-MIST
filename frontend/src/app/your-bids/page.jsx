"use client"
import BuyerBids from "@/components/BuyerBids";


import React from "react";

export default function YourBids() {
    // = ({name,location,time,description,category,price,username,time}) =>

    const data = [
        {
            id: '1',
            name: 'Product1',
            location: 'Dhaka',
            time: '12.00',
            description: 'This is good',
            category: 'phone',
            price: '122222',
            username: 'Shadman'

        },
        {
            id: '2',
            name: 'Product2',
            location: 'Chittagong',
            time: '12.10',
            description: 'This is good',
            category: 'phone',
            price: '122222',
            username: 'Shafeen'
        },
        {
            id: '3',
            name: 'Product3',
            location: 'Khulna',
            time: '12.40',
            description: 'This is good',
            category: 'phone',
            price: '122222',
            username: 'Khan'
        },
        {
            id: '4',
            name: 'Product4',
            location: 'Khulna',
            time: '12.44',
            description: 'This is not good',
            category: 'phone',
            price: '122222',
            username: 'Sadia'
        },
        {
            id: '5',
            name: 'Product5',
            location: 'Khulna',
            time: '12.45',
            description: 'This is good',
            category: 'phone',
            price: '122222',
            username: 'Shitol'
        }
    ]
    return (
        <>
            <div>
                <p className="font-bold text-3xl ml-[300px] my-4 ">Your Bids</p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-center ">
                {data.map((item) => (
                    <BuyerBids key={item.id} id={item.id} name={item.name} username={item.username}
                               description={item.description} price={item.price} category={item.category}
                               time={item.time}/>
                ))}

            </div>
        </>
    )
}
// export default YourBids