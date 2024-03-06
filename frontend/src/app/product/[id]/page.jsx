"use client"

import Image from "next/image";
import {useState} from "react";
import Button from "@/components/Button";
import SellerSelectModal from "@/components/SellerSelectModal";
import BuyerBidModal from "@/components/BuyerBidModal";
import Header from "@/components/Header";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";
import {useSession} from "next-auth/react";
import {toast, Toaster} from "sonner";
import {useRouter} from "next/navigation";

const isSeller = (userData, sellerData) => {
    if (userData?.id === sellerData?.id) {
        return true;
    } else {
        return false;
    }
}
const isPurchased = (userData, productData) => {
    if (productData?.isSold && (productData?.finalBuyerId === userData?.id)) {
        return true;
    } else {
        return false;
    }
}

const redirectToLogin = (router) => {
    toast.error("You must be logged in to see bidding info. Redirecting...");
    setTimeout(() => {
        router.push('/login')
    }, 2000)
}

const ProductPage = ({params}) => {

    const {data: session} = useSession();
    const router = useRouter();
    const productID = params.id;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {
        data: productData,
        error: productError,
        isLoading: productDataIsLoading
    } = useSWR(`/products/${productID}`, fetcher)
    const {data: userData, error: userDataError, isLoading: userDataIsLoading} = useSWR(`/user/profile`, fetcher)

    return (
        <>
            <Header/>
            <Toaster richColors position={"top-right"}/>
            {!productDataIsLoading && !productError && isSeller(productData.seller, userData) && modalIsOpen &&
                <SellerSelectModal setModalOpen={setModalIsOpen} productName={productData ? productData.name : ""}
                                   isBidActive={productData ? productData.isBidActive : false}
                                   finalBuyerId={productData.finalBuyerID} productID={productID}/>}
            {!productDataIsLoading && !productError && !userDataIsLoading && !userDataError && !isSeller(productData.seller, userData) && modalIsOpen &&
                <BuyerBidModal setModalOpen={setModalIsOpen} productName={productData ? productData.name : ""}
                               userData={userData ? userData : null}
                               isVisible={productData ? productData.isVisible : false} productID={productID}/>}
            <div className="w-full h-[700px] flex flex-col justify-center items-center">
                <div className="flex w-full justify-center items-center ">
                    <h1 className="font-semibold text-4xl mb-[1%]">Product Details</h1>
                </div>
                <div className="w-4/5 h-5/6 border-2 border-black flex flex-row justify-center items-center rounded-lg">
                    {productDataIsLoading && (
                        <h1 className="text-2xl font-light">Loading Product Details...</h1>
                    )}
                    {!productDataIsLoading && (
                        <>
                            <div className="w-1/2 h-full  flex justify-center items-center">
                                <div className="w-[95%] h-[95%] -z-10 relative">
                                    <Image src={"/dslr.jpg"} alt={"dslr"} fill objectFit={"cover"}
                                           style={{borderRadius: "3%"}}/>
                                </div>
                            </div>
                            <div className="w-1/2 h-full flex justify-center items-center">
                                <div className="w-3/4 h-full flex flex-col justify-center items-center">
                                    <div className="w-full h-1/5 flex justify-start items-center  border-b">
                                        <h1 className="text-3xl text-black font-medium text-left">{productData ? productData.name : ""}</h1>
                                    </div>
                                    <div className="w-full h-1/5 flex flex-col justify-start items-center border-b">
                                        <div className="w-full h-1/3 flex">
                                            <p className="text-lg">{productData ? productData.category.category : ""} , {productData ? productData.category.subCategory : ""}</p>
                                        </div>
                                        <div className="w-full h-1/3 flex">
                                            <p className="text-base">{productData ? productData.seller.address : ""}</p>
                                        </div>
                                        <div className="w-full h-1/3 flex">
                                            <p className="text-base">For sale by <span
                                                className="font-medium">{productData ? productData.seller.name : ""}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-1/5 flex items-start mt-2 border-b">
                                        <p className="font-light">{productData ? productData.description : ""}</p>
                                    </div>
                                    <div className="w-full h-1/5 flex flex-col justify-center items-start border-b">
                                        <p className="text-lg mb-2">Starting Price : <span
                                            className="font-medium">{productData ? "Tk " + productData.startingPrice : ""}</span>
                                        </p>
                                        <p className="text-lg mb-2">Size : <span
                                            className="font-medium">{productData ? productData.size : ""}</span></p>
                                        <p className="text-lg">Condition : &nbsp;
                                            {productData && productData.usedCondition && (
                                                <span className="font-medium">Used</span>
                                            )}
                                            {productData && !productData.usedCondition && (
                                                <span className="font-medium">New</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="w-full h-1/5 flex justify-center items-center border-b">
                                        {/*For Seller : View Bids Modal Open Button For Seller*/}
                                        {!productError && isSeller(productData.seller, userData) && !productData.isSold &&
                                            (<Button value={"View Bids"} option={1} type={"button"}
                                                     onClick={() => {
                                                         session ? setModalIsOpen(true) : redirectToLogin(router)
                                                     }}/>)}

                                        {/*For Buyer : Bid Modal Open Button For Buyer (Bidding is Active and Not Sold)*/}
                                        {!productError && !isSeller(productData.seller, userData) && productData.isBidActive && !productData.isSold &&
                                            (<Button value={"Bid"} option={1} type={"button"}
                                                     onClick={() => {
                                                         session ? setModalIsOpen(true) : redirectToLogin(router)
                                                     }}/>)}

                                        {/*For Buyer : Bidding is Inactive*/}
                                        {!productError && !isSeller(productData.seller, userData) && !productData.isBidActive && !productData.isSold &&
                                            (
                                                <p className="px-4 py-1 cursor-default bg-black text-white text-2xl shadow-lg shadow-slate-300 rounded-full">Bidding
                                                    Is Off</p>)}

                                        {/*For Buyer : Buy Now Button for Buyer, when Seller has Selected Current User*/}
                                        {!productError && !isSeller(productData.seller, userData) && !productData.isBidActive && !productData.isSold && productData.finalBuyerId &&
                                            (<Button value={"Buy Now"} option={0} type={"button"}/>)}

                                        {/*For Buyer : Product Has Been Sold*/}
                                        {!productError && productData.isSold &&
                                            (
                                                <p className="px-4 py-1 cursor-default bg-black text-white text-2xl shadow-lg shadow-slate-300 rounded-full">Sold</p>)}

                                        {/*For Buyer : Product Has Been Purchased By Current User*/}
                                        {!productError && isPurchased(userData, productData) &&
                                            (
                                                <p className="px-4 py-1 cursor-default bg-black text-white text-2xl shadow-lg shadow-slate-300 rounded-full">Purchased</p>)}

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </>
    );
}
export default ProductPage;