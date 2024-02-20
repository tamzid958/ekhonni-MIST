"use client"
import ProductDetailBox from "@/components/ProductDetailBox"
import Button from "@/components/Button";



const YourProducts = ({name,location,time,description,category,price,username}) =>
{
    return(
        <>
            <div className="w-screen h-[700px] justify-center items-center ">

                <p className="font-bold text-3xl ml-[300px] mt-4 ">Posts to approve</p>
                <ProductDetailBox/>
            </div>
        </>
    )
}
export default YourProducts