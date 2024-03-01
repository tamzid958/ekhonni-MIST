"use client"

import Image from "next/image";
import {useEffect, useState} from "react";
import Button from "@/components/Button";
import SellerSelectModal from "@/components/SellerSelectModal";
import BuyerBidModal from "@/components/BuyerBidModal";
import Header from "@/components/Header";
import axios from "axios";

const ProductPage = ({params}) => {

    const token = localStorage.getItem("token");
    const [userIsSeller, setUserIsSeller] = useState(null);
    const [isBidActive, setIsBidActive] = useState(null);
    const [isVisible, setIsVisible] = useState(null);
    const [isSold, setIsSold] = useState(null);
    const [isPurchased , setIsPurchased] = useState(null);
    const [finalBuyerId , setFinalBuyerId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [data, setData] = useState(null);
    const [currentUserId, setCurrentUserId] = useState("");
    const [sellerId, setSellerId] = useState("");
    const productID = params.id;

    const fetchCurrentUserDetails = async () => {
        await axios.get(`http://localhost:8080/api/v1/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            setCurrentUserId(response.data.id);
            if (currentUserId === sellerId) {
                setUserIsSeller(true);
            } else {
                setUserIsSeller(false);
            }

            if (isSold && (finalBuyerId === currentUserId)) {
                setIsPurchased(true);
            } else {
                setIsPurchased(false);
            }
        }).catch((error) => {
            console.log("Error fetching current user data : ", error);
        })
    }
    const fetchProductDetails = async () => {
        await axios.get(`http://localhost:8080/api/v1/products/${productID}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log(response);
            setData(response.data);
            setIsSold(response.data.isSold);
            setIsBidActive(response.data.isBidActive);
            setIsVisible(response.data.isVisible);
            setFinalBuyerId(response.data.finalBuyerId);
            setSellerId(response.data.seller.id);
        }).catch((error) => {
            console.log("Error Fetching Data : ", error);
        })
    }
    useEffect(() => {
        fetchProductDetails()
            .then(r => {
                console.log(r);
            });
    }, [productID]);

    useEffect(() => {
        fetchCurrentUserDetails().then(r => {
            console.log(r);
        });
    }, [sellerId]);


    return (
        <>
            <Header/>
            {userIsSeller && modalIsOpen &&
                <SellerSelectModal setModalOpen={setModalIsOpen} productName={data ? data.name : ""} isBidActive={data ? isBidActive : false} finalBuyerId = {finalBuyerSelected} productID = {productID}/>}
            {!userIsSeller && modalIsOpen &&
                <BuyerBidModal setModalOpen={setModalIsOpen} productName={data ? data.name : ""} isVisible={data ? isVisible : false} productID={productID}/>}
            <div className="w-full h-[700px] flex flex-col justify-center items-center">
                <div className="flex w-full justify-center items-center ">
                    <h1 className="font-semibold text-4xl mb-[1%]">Product Details</h1>
                </div>
                <div className="w-4/5 h-5/6 border-2 border-black flex flex-row justify-start items-center rounded-lg">
                    <div className="w-1/2 h-full  flex justify-center items-center">
                        <div className="w-[95%] h-[95%] -z-10 relative">
                            <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"}
                                   style={{borderRadius: "3%"}}/>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <div className="w-3/4 h-full flex flex-col justify-center items-center">
                            <div className="w-full h-1/5 flex justify-start items-center  border-b">
                                <h1 className="text-3xl text-black font-medium text-left">{data ? data.name : ""}</h1>
                            </div>
                            <div className="w-full h-1/5 flex flex-col justify-start items-center border-b">
                                <div className="w-full h-1/3 flex">
                                    <p className="text-base">{data ? data.category.category : ""} , {data ? data.category.subCategory : ""}</p>
                                </div>
                                <div className="w-full h-1/3 flex">
                                    <p className="text-base">{data ? data.seller.location : ""}</p>
                                </div>
                                <div className="w-full h-1/3 flex">
                                    <p className="text-base">For sale by {data ? data.seller.name : ""}</p>
                                </div>
                            </div>
                            <div className="w-full h-1/5 flex items-center border-b">
                                <p className="text-lg">{data ? data.description : ""}</p>
                            </div>
                            <div className="w-full h-1/5 flex flex-col justify-center items-start border-b">
                                <p className="text-lg mb-2">Starting Price : <span
                                    className="font-medium">{data ? data.startingPrice : ""}</span></p>
                                <p className="text-lg mb-2">Size : <span
                                    className="font-medium">{data ? data.size : ""}</span></p>
                                <p className="text-lg">Condition :
                                    {data && data.usedCondition && (
                                        <span className="font-medium">Used</span>
                                    )}
                                    {data && !data.usedCondition && (
                                        <span className="font-medium">New</span>
                                    )}
                                </p>
                            </div>
                            <div className="w-full h-1/5 flex justify-center items-center border-b">
                                {data && userIsSeller && !isSold &&
                                    (<Button value={"View Bids"} option={1} type={"button"} onClick={() => {
                                        setModalIsOpen(true)
                                    }}/>)}
                                {data && !userIsSeller && isBidActive && !isSold &&
                                    (<Button value={"Bid"} option={1} type={"button"}
                                             onClick={() => setModalIsOpen(true)}/>)}
                                {data && !userIsSeller && !isBidActive && !isSold &&
                                    (
                                        <p className="px-4 py-1 cursor-default bg-black text-white text-2xl shadow-lg shadow-slate-300 rounded-full">Bidding
                                            Is Off</p>)}
                                {data && !userIsSeller && !isBidActive && !isSold && finalBuyerSelected &&
                                    (<Button value={"Buy Now"} option={0} type={"button"}/>)}
                                {data && isSold &&
                                    (<p className="px-4 py-1 cursor-default bg-black text-white text-2xl font-medium shadow-lg shadow-slate-300 rounded-full">Sold</p>)}
                                {data && isPurchased &&
                                    (<p className="px-4 py-1 cursor-default bg-black text-white text-2xl font-medium shadow-lg shadow-slate-300 rounded-full">Purchased</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductPage;