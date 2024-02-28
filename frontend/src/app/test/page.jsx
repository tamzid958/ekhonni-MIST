"use client"

import BuyerBidModal from "@/components/BuyerBidModal";
import SellerSelectModal from "@/components/SellerSelectModal";
import {useState} from "react";

const TestPage = () => {
    const biddingActive = true;
    const [modalIsOpen , setModalIsOpen] = useState(true);
    return (
        <>
            {/*<BuyerBidModal setModalOpen={setModalIsOpen} maxBid={65000} visibility={false} productID={productID} />*/}
            <SellerSelectModal setModalOpen={setModalIsOpen} maxBid={65000} isBidActive={biddingActive}/>
        </>
    )
}

export default TestPage;