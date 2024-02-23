"use client"

import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";
import Button from "@/components/Button";


const ProductBidPage = ({ params }) => {

    const currentUserEmail = localStorage.getItem("currentUserEmail");
    let seller = false
    const [data , setData] = useState([]);
    const product_id = params.id;
    // const  fetchProductDetails = async () => {
    //     const response = await axios.get(`http://localhost:8080/api/v1/products/${product_id}`);
    //     console.log(response);
    //     setData(response.data);
    // }
    // useEffect(() => {
    //     fetchProductDetails().then(r => {
    //         console.log(r);
    //     });
    // }, []);
    // if(data.seller.email === currentUserEmail) {
    //      seller = true;
    // }
    // else {
    //      seller = false;
    // }
    return (
        <div className="w-screen h-[700px] flex justify-center items-center">
            <div className="w-4/5 h-5/6 border-2 border-black flex flex-row justify-start items-center rounded-lg">
                <div className="w-1/2 h-full  flex justify-center items-center">
                    <div className="w-[95%] h-[95%]  relative">
                        <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"} style={{borderRadius:"3%"}}/>
                    </div>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className="w-3/4 h-full flex flex-col justify-center items-center">
                        <div className="w-full h-1/5 flex justify-start items-center  border-b">
                            <h1 className="text-3xl text-black font-medium text-left">
                                Product Name
                            </h1>
                        </div>
                        <div className="w-full h-1/5 flex flex-col justify-start items-center border-b">
                            <div className="w-full h-1/3 flex">
                                <p className="text-base">Category , Subcategory</p>
                            </div>
                            <div className="w-full h-1/3 flex">
                                <p className="text-base">Location</p>
                            </div>
                            <div className="w-full h-1/3 flex">
                                <p className="text-base">For sale by sellerName</p>
                            </div>
                        </div>
                        <div className="w-full h-1/5 flex items-center border-b">
                            <p className="text-lg">Description</p>
                        </div>
                        <div className="w-full h-1/5 flex items-center border-b">
                            <p className="text-xl">Current Price</p>
                        </div>
                        <div className="w-full h-1/5 flex justify-center items-center border-b">
                            <Button value={"Bid"} option={1} type={"button"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductBidPage;