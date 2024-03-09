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
import {requestApi} from "@/utils/axios.settings";


const isSeller = (userData, productData) => {
    if (userData?.id === productData?.product.seller?.id) {
        return true;
    } else {
        return false;
    }
}

const isPurchased = (userData, productData) => {
    if (productData?.product.isSold && (productData?.product.finalBuyerId === userData?.id)) {
        return true;
    } else {
        return false;
    }
}
const isFinalBuyer = (userData, productData) => {
    if (productData?.product.finalBuyerId === userData?.id) {
        return true;
    } else {
        return false
    }
}
const redirectToLogin = (router) => {
    toast.error("You must be logged in to see bidding info. Redirecting...");
    setTimeout(() => {
        router.push('/login')
    }, 2000)
}

const handleBuyNow = async (productId, router) => {
    const req = {"Content-Type": "application/json"}
    const url = "/user/buy-now";
    const method = "POST"
    const data = {
        "id": productId
    }
    try {
        const {data: response} = await requestApi({req, url, method, data})
        console.log(response)
        if (response?.GatewayPageURL) {
            router.push(response.GatewayPageURL)
        }
    } catch (e) {
        toast.error(e.message);
    }
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
    const {data: userData, error: userDataError, isLoading: userDataIsLoading} = useSWR('/user/profile', fetcher)
    console.log(productData);
    return (
        <>
            <Toaster richColors position={"top-right"}/>
            <Header/>
            {!productDataIsLoading && !productError && isSeller(userData, productData) && modalIsOpen &&
                <SellerSelectModal setModalOpen={setModalIsOpen} productName={productData ? productData.product.name : ""}
                                   isBidActive={productData ? productData.product.isBidActive : false}
                                   finalBuyerId={productData ? productData.product.finalBuyerId : null} productID={productID}/>}
            {!productDataIsLoading && !productError && !isSeller(userData, productData) && modalIsOpen &&
                <BuyerBidModal setModalOpen={setModalIsOpen} productName={productData ? productData.product.name : ""}
                               userData={userData ? userData : null}
                               isVisible={productData ? productData.product.isVisible : false} productID={productID}/>}
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
                                    <Image src={productData.images[0]?.imageByte} alt={"dslr"} fill objectFit={"cover"}
                                           style={{borderRadius: "3%"}}/>
                                </div>
                            </div>
                            <div className="w-1/2 h-full flex justify-center items-center">
                                <div className="w-3/4 h-full flex flex-col justify-center items-center">
                                    <div className="w-full h-1/5 flex justify-start items-center  border-b">
                                        <h1 className="text-3xl text-black font-medium text-left">{productData ? productData.product.name : ""}</h1>
                                    </div>
                                    <div className="w-full h-1/5 flex flex-col justify-start items-center border-b">
                                        <div className="w-full h-1/3 flex">
                                            <p className="text-lg">{productData ? productData.product.category?.category : ""} , {productData ? productData.product.category?.subCategory : ""}</p>
                                        </div>
                                        <div className="w-full h-1/3 flex">
                                            <p className="text-base">{productData ? productData.product.seller?.address : ""}</p>
                                        </div>
                                        <div className="w-full h-1/3 flex">
                                            <p className="text-base">For sale by <span
                                                className="font-medium">{productData ? productData.product.seller?.name : ""}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-1/5 flex items-start mt-2 border-b">
                                        <p className="font-light">{productData ? productData.product.description : ""}</p>
                                    </div>
                                    <div className="w-full h-1/5 flex flex-col justify-center items-start border-b">
                                        <p className="text-lg mb-2">Starting Price : <span
                                            className="font-medium">{productData ? "Tk " + productData.product.startingPrice : ""}</span>
                                        </p>
                                        <p className="text-lg mb-2">Size : <span
                                            className="font-medium">{productData ? productData.product.size : ""}</span></p>
                                        <p className="text-lg">Condition : &nbsp;
                                            {productData && productData.product.usedCondition && (
                                                <span className="font-medium">Used</span>
                                            )}
                                            {productData && !productData.product.usedCondition && (
                                                <span className="font-medium">New</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="w-full h-1/5 flex justify-center items-center border-b">
                                        {/*For Seller : View Bids Modal Open Button For Seller*/}
                                        {!productError && isSeller(userData, productData) && !productData.product.isSold &&
                                            (<Button value={"View Bids"} option={1} type={"button"}
                                                     onClick={() => {
                                                         session ? setModalIsOpen(true) : redirectToLogin(router)
                                                     }}/>)}

                                        {/*For Buyer : Bid Modal Open Button For Buyer (Bidding is Active and Not Sold)*/}
                                        {!productError && !isSeller(userData, productData) && productData.product.isBidActive && !productData.product.isSold && !productData.product.finalBuyerId &&
                                            (<Button value={"Bid"} option={1} type={"button"}
                                                     onClick={() => {
                                                         session ? setModalIsOpen(true) : redirectToLogin(router)
                                                     }}/>)}

                                        {/*For Buyer : Bidding is Inactive*/}
                                        {!productError && !isSeller(userData, productData) && !isFinalBuyer(userData, productData) && !productData.product.isBidActive && !productData.product.isSold &&
                                            (
                                                <p className="px-4 py-1 cursor-default bg-black text-white text-xl shadow-lg shadow-slate-300 rounded-full">Bidding
                                                    Is Off</p>)}
                                        {/*For Buyer : Buy Now Button for Buyer, when Seller has Selected Current User*/}
                                        {!productError
                                            && !isSeller(userData, productData) && isFinalBuyer(userData, productData) && !productData.product.isSold &&
                                            (<Button value={"Buy Now"} option={1} type={"button"}
                                                     onClick={() => {
                                                         session ? handleBuyNow(productID, router) : redirectToLogin(router)
                                                     }}/>)}

                                        {/*For Buyer : Product Has Been Sold*/}
                                        {!productError && !userDataError && productData.product.isSold && !isPurchased(userData , productData) &&
                                            (
                                                <p className="px-4 py-1 cursor-default bg-black text-white text-2xl shadow-lg shadow-slate-300 rounded-full">Sold</p>)}

                                        {/*For Buyer : Product Has Been Purchased By Current User*/}
                                        {!productError && !userDataError && isPurchased(userData, productData) &&
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
