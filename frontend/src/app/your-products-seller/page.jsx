"use client"
import SingleProduct from "@/components/SingleProduct"
import Button from "@/components/Button";
import BuyerBids from "@/components/BuyerBids";



const YourProducts = ({name,location,time,description,category,price,username}) =>
{
    return(
        <>
            <div>
                <p className="font-bold text-3xl ml-[300px] mt-4 ">Your Products</p>
            </div>
            <div className="w-screen h-[700px] flex flex-col justify-start items-center ">


                <SingleProduct/>
            </div>
        </>
    )
}
export default YourProducts