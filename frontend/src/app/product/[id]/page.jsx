"use client"

import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";
import Button from "@/components/Button";
import SellerSelectModal from "@/components/SellerSelectModal";
import BuyerBidModal from "@/components/BuyerBidModal";
import Header from "@/components/Header";


const ProductPage = ({ params }) => {

    const userIsSeller = true;
    const biddingActive = true;
    const isSold = false;
    const [modalIsOpen , setModalIsOpen] = useState(false);
    const [data , setData] = useState([]);
    const productID = params.id;
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
    //      userIsSeller = true;
    // }
    // else {
    //      userIsSeller = false;
    // }
    return (
        <>
            <Header />
            {userIsSeller && modalIsOpen && <SellerSelectModal setModalOpen={setModalIsOpen} maxBid={65000} isBidActive={biddingActive}/>}
            {!userIsSeller && modalIsOpen && <BuyerBidModal setModalOpen={setModalIsOpen} maxBid={65000} visibility={false} productID={productID} />}
            <div className="w-full h-[700px] flex flex-col justify-center items-center">
                <div className="flex items-center justify-start ">
                    <h1 className="font-semibold text-4xl mb-[1%]">Product Details</h1>
                </div>
                <div className="w-4/5 h-5/6 border-2 border-black flex flex-row justify-start items-center rounded-lg">
                    <div className="w-1/2 h-full  flex justify-center items-center">
                        <div className="w-[95%] h-[95%] -z-10 relative">
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
                                {userIsSeller && !isSold &&
                                    (<Button value={"View Bids"} option={1} type={"button"} onClick={() => {setModalIsOpen(true)}}/>)}
                                {!userIsSeller && biddingActive && !isSold &&
                                    (<Button value={"Bid"} option={1} type={"button"} onClick={() => setModalIsOpen(true)}/>)}
                                {!userIsSeller && !biddingActive && !isSold &&
                                    (<p className="px-4 py-1 cursor-default bg-black text-white text-2xl shadow-lg shadow-slate-300 rounded-full">Bidding Is Off</p>)}
                                {isSold &&
                                    (<p className="px-4 py-1 cursor-default bg-black text-white text-2xl font-medium shadow-lg shadow-slate-300 rounded-full">Sold</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductPage;