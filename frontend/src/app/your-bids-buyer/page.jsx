"use client"
import ProductDetailBox from "@/components/ProductDetailBox"
import Button from "@/components/Button";
import BuyerBids from "@/components/BuyerBids";



const YourBids = ({name,location,time,description,category,price,username}) =>
{
    return(
        <>
            <div>
                <p className="font-bold text-3xl ml-[300px] mt-4 ">Your Bids</p>
            </div>
            <div className="w-screen h-[700px] flex flex-col justify-start items-center ">


                <BuyerBids/>
            </div>
        </>
    )
}
export default YourBids